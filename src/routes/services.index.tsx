import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/services";
import heroImg from "@/assets/hero-structure.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Engineering Services — Plama Projects Sydney" },
      { name: "description", content: "Structural, civil, façade, hydraulic, marine and expert engineering services — delivered in-house across Sydney." },
      { property: "og:title", content: "Engineering Services — Plama Projects" },
      { property: "og:description", content: "Eight disciplines. One team. Explore Plama Projects' full engineering service range." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ten disciplines."
        italic="One"
        accent=" team."
        body="From concept feasibility through certification, every service is delivered by chartered engineers under one roof."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map(({ icon: Icon, title, short, route }, i) => (
            <Link
              key={route}
              to={route}
              className="group relative bg-white p-6 transition-all duration-500 hover:bg-[var(--brand)]"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--accent-orange)] group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] text-[var(--ink-soft)]/70 group-hover:text-white/60 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-lg text-[var(--ink)] group-hover:text-white transition-colors">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)] group-hover:text-white/75 transition-colors">{short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--brand)] group-hover:text-[var(--accent-orange)]">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
