import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
const plamaLogo = { url: "/plama-logo.png" };

const serviceLinks = [
  { to: "/services", hash: "structural", label: "Structural Engineering" },
  { to: "/services", hash: "civil", label: "Civil Engineering" },
  { to: "/services", hash: "facade", label: "Glass & Façade Engineering" },
  { to: "/services", hash: "hydraulic", label: "Hydraulic & Stormwater" },
  { to: "/services", hash: "weatherproofing", label: "Weatherproofing & Waterproofing" },
  { to: "/services", hash: "marine", label: "Marine Structural" },
  { to: "/services", hash: "expert-reports", label: "Expert Reports & Certifications" },
  { to: "/services", hash: "project-management", label: "Development & Project Mgmt" },
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

  // Transparent over hero on home; solid elsewhere or after scroll
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#F6F3EC]/95 backdrop-blur-md shadow-[0_1px_0_0_#C9C3B6]" : "bg-transparent"
      }`}
    >

      <div className="container-px mx-auto w-full flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex items-center">
          <img src={plamaLogo.url} alt="Plama Projects" className="h-28 md:h-36 w-auto" />
        </Link>



        <nav
          className={`hidden lg:flex items-center gap-9 text-lg md:text-xl transition-colors ${
            solid ? "text-[var(--ink)]" : "text-white/85"
          }`}
        >
          <NavLink to="/" label="Home" exact />
          <NavLink to="/about" label="About" />
          <NavLink to="/services" label="Services" />
          {/* Industries removed as requested */}
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
            <MobileLink to="/services" label="Services" />
            {/* Mobile link for industries removed */}
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

function MobileLink({ to, hash, label, small }: { to: string; hash?: string; label: string; small?: boolean }) {
  return (
    <Link
      to={to}
      hash={hash}
      className={`py-2 ${small ? "text-xs text-[var(--ink-soft)]" : ""} hover:text-[var(--brand)]`}
      activeProps={{ className: "text-[var(--accent-orange)] font-semibold" }}
    >
      {label}
    </Link>
  );
}
