import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import plamaLogo from "@/assets/plama-logo.png.asset.json";

const serviceLinks = [
  { to: "/services/structural", label: "Structural Engineering" },
  { to: "/services/civil", label: "Civil Engineering" },
  { to: "/services/facade", label: "Glass & Façade Engineering" },
 { to: "/services/hydraulic", label: "Hydraulic & Stormwater" },
 { to: "/services/weatherproofing", label: "Weatherproofing & Waterproofing" },
  { to: "/services/marine", label: "Marine Structural" },
  { to: "/services/expert-reports", label: "Expert Reports & Certifications" },
  { to: "/services/project-management", label: "Development & Project Mgmt" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // On non-home routes, always show the solid white nav (no hero underneath)
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto w-full flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex items-center">
          <img src={plamaLogoUrl} alt="Plama Projects" className="h-10 md:h-12 w-auto" />
        </Link>

        <nav
          className={`hidden lg:flex items-center gap-7 text-sm transition-colors ${
            solid ? "text-[var(--ink)]" : "text-white/85"
          }`}
        >
          <NavLink to="/" label="Home" exact />
          <NavLink to="/about" label="About" />
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:opacity-70 transition"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[280px]">
                <div className="bg-white rounded-xl shadow-2xl border border-border py-2 text-[var(--ink)]">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm font-medium hover:bg-[var(--surface)] hover:text-[var(--brand)]"
                  >
                    All Services
                  </Link>
                  <div className="my-1 border-t border-border" />
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-4 py-2 text-sm hover:bg-[var(--surface)] hover:text-[var(--brand)]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/industries" label="Industries" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
              solid
                ? "bg-[var(--brand)] text-white hover:bg-[var(--accent-orange)]"
                : "bg-white text-[var(--brand)] hover:bg-[var(--accent-orange)] hover:text-white"
            }`}
          >
            Request Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className={`lg:hidden grid place-items-center h-10 w-10 rounded-md ${
              solid ? "text-[var(--ink)]" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="container-px mx-auto w-full py-4 flex flex-col text-[var(--ink)] text-sm">
            <MobileLink to="/" label="Home" />
            <MobileLink to="/about" label="About" />
            <MobileLink to="/services" label="All Services" />
            <div className="pl-4 border-l border-border ml-2 my-1 flex flex-col">
              {serviceLinks.map((s) => (
                <MobileLink key={s.to} to={s.to} label={s.label} small />
              ))}
            </div>
            <MobileLink to="/industries" label="Industries" />
            <MobileLink to="/projects" label="Projects" />
            <MobileLink to="/contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label, exact }: { to: string; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      className="hover:opacity-70 transition"
      activeProps={{ className: "font-semibold text-[var(--accent-orange)]" }}
      activeOptions={{ exact: exact ?? false }}
    >
      {label}
    </Link>
  );
}

function MobileLink({ to, label, small }: { to: string; label: string; small?: boolean }) {
  return (
    <Link
      to={to}
      className={`py-2 ${small ? "text-xs text-[var(--ink-soft)]" : ""} hover:text-[var(--brand)]`}
      activeProps={{ className: "text-[var(--accent-orange)] font-semibold" }}
    >
      {label}
    </Link>
  );
}
