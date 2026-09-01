import { createFileRoute } from "@tanstack/react-router";

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB per file
const MAX_TOTAL_BYTES = 20 * 1024 * 1024; // 20MB total
const MAX_FILES = 10;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["RESEND_API_KEY"];
        if (!apiKey) {
          console.error("RESEND_API_KEY is not configured");
          return Response.json({ ok: false, error: "Email service not configured" }, { status: 500 });
        }

        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return Response.json({ ok: false, error: "Invalid form submission" }, { status: 400 });
        }

        const str = (key: string) => {
          const v = form.get(key);
          return typeof v === "string" ? v.trim().slice(0, 2000) : "";
        };

        const name = str("name");
        const email = str("email");
        const phone = str("phone");
        const location = str("location");
        const service = str("service");
        const message = str("message");

        if (!name || !email || !message) {
          return Response.json({ ok: false, error: "Name, email and message are required" }, { status: 400 });
        }
        if (!isEmail(email)) {
          return Response.json({ ok: false, error: "Please provide a valid email address" }, { status: 400 });
        }

        // Collect attachments
        const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
        if (files.length > MAX_FILES) {
          return Response.json({ ok: false, error: `Too many files (max ${MAX_FILES})` }, { status: 400 });
        }
        let total = 0;
        const attachments: { filename: string; content: string }[] = [];
        for (const file of files) {
          if (file.size > MAX_FILE_BYTES) {
            return Response.json(
              { ok: false, error: `"${file.name}" is too large (max 8MB per file)` },
              { status: 400 },
            );
          }
          total += file.size;
          if (total > MAX_TOTAL_BYTES) {
            return Response.json({ ok: false, error: "Total attachments exceed 20MB" }, { status: 400 });
          }
          const base64 = Buffer.from(await file.arrayBuffer()).toString("base64");
          attachments.push({ filename: file.name || "attachment", content: base64 });
        }

        const esc = (s: string) =>
          s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

        const rows = [
          ["Name", name],
          ["Email", email],
          ["Phone", phone || "—"],
          ["Project location", location || "—"],
          ["Service required", service || "—"],
        ]
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;color:#555;width:160px">${k}</td><td style="padding:8px 12px;border:1px solid #e5e5e5">${esc(v)}</td></tr>`,
          )
          .join("");

        const html = `
          <div style="font-family:Arial,sans-serif;max-width:640px">
            <h2 style="color:#14181C">New project enquiry — plamaprojects.com.au</h2>
            <table style="border-collapse:collapse;width:100%;margin:16px 0">${rows}</table>
            <h3 style="color:#14181C;margin-bottom:6px">Project brief</h3>
            <p style="white-space:pre-wrap;line-height:1.6;color:#333">${esc(message)}</p>
            <p style="color:#888;font-size:12px;margin-top:24px">
              ${attachments.length} attachment(s) included · Reply directly to this email to respond to ${esc(name)}.
            </p>
          </div>`;

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from:
              process.env["CONTACT_FROM_EMAIL"] ||
              "Plama Projects Website <enquiries@plamaprojects.com.au>",
            to: ["plama.pro@outlook.com"],
            reply_to: email,
            subject: `New enquiry: ${service || "General"} — ${name}`,
            html,
            ...(attachments.length ? { attachments } : {}),
          }),
        });

        if (!response.ok) {
          const body = await response.text();
          console.error(`Resend send failed [${response.status}]: ${body}`);
          const friendly =
            response.status === 403 && body.includes("not verified")
              ? "Email sending is not active yet: the sending domain is still being verified. Please email plama.pro@outlook.com directly in the meantime."
              : `Email provider error [${response.status}]: ${body}`;
          return Response.json({ ok: false, error: friendly }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
