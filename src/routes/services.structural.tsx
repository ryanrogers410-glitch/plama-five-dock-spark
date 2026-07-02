import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";

const service = getService("structural")!;

export const Route = createFileRoute("/services/structural")({
  head: () => ({
    meta: [
      { title: `${service.title} — Plama Projects` },
      { name: "description", content: service.short },
      { property: "og:title", content: `${service.title} — Plama Projects` },
      { property: "og:description", content: service.short },
    ],
  }),
  component: () => <ServicePage service={service} />,
});
