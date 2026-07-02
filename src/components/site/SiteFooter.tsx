import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import plamaLogoUrl from "@/assets/plama-logo.png";

const cols = [
  {
    title: "Services",
    links: [
      { to: "/services/structural", label: "Structural Engineering" },
      { to: "/services/civil", label: "Civil Engineering" },
      { to: "/services/facade", label: "Glass & Façade" },
      { to: "/services/hydraulic", label: "Hydraulic & Stormwater" },
      { to: "/services/marine", label: "Marine Structural" },
      { to: "/services/expert-reports", label: "Expert Reports" },
      { to: "/services/project-management", label: "Project Management" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/industries", label: "Industries" },
      { to: "/projects", label: "Projects" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#000d1f] text-white/75 border-t border-white/10">
      <div className="container-px mx-auto w-full py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center">
            <img src={plamaLogoUrl} alt="Plama Projects" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 text-sm max-w-sm leading-relaxed text-white/60">
            Sydney-based multidisciplinary engineering consultancy. Structural, civil,
            façade, marine and hydraulic engineering — delivered by senior engineers,
            in-house, end-to-end.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <a href="tel:0452588578" className="hover:text-white">0452 588 578</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <a href="mailto:plama.pro@outlook.com" className="hover:text-white">plama.pro@outlook.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <span>1 Kerin Avenue, Five Dock NSW 2046</span>
            </li>
          </ul>
        </div>

        {cols.map((col) => (
          <div key={col.title} className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-white/50">{col.title}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1" />
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto w-full py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Plama Projects. All rights reserved.</span>
          <span>Multidisciplinary Engineering Consultancy · Sydney, NSW</span>
        </div>
      </div>
    </footer>
  );
}
