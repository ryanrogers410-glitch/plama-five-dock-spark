import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import secResidential from "@/assets/sector-residential.jpg";
import secCommercial from "@/assets/sector-commercial.jpg";
import secHealthcare from "@/assets/sector-healthcare.jpg";
import secMarine from "@/assets/sector-marine.jpg";
import heroImg from "@/assets/hero-structure.jpg";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Plama Projects" },
      { name: "description", content: "A selection of representative engineering projects delivered by Plama Projects across Sydney." },
      { property: "og:title", content: "Projects — Plama Projects" },
      { property: "og:description", content: "Representative engineering work across residential, commercial, healthcare and marine sectors." },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: proj1, title: "New Built", location: "Sydney Metro", tags: ["Structural", "Civil"], desc: "Professional engineers involving in diverse design and construction of all sectors." },
  { img: proj2, title: "Knock Down - Rebuilt", location: "Five Dock", tags: ["Structural", "Civil"], desc: "Structural engineering design for a significant residential redevelopment." },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Engineered work across"
        italic="Sydney"
        accent="."
        body="A representative selection of the residential, commercial, healthcare and waterfront work delivered by our multidisciplinary team."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <article key={p.title} className="group bg-white border border-border rounded-xl overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--brand)]">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-orange)]">
                  {p.location}
                </div>
                <h3 className="mt-2 font-display text-lg text-[var(--ink)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-[var(--surface)] border border-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-[var(--accent-orange)]">More on request</div>
            <h3 className="mt-2 font-display text-xl md:text-2xl text-[var(--ink)]">
              Looking for a specific project reference?
            </h3>
            <p className="mt-1 text-sm text-[var(--ink-soft)] max-w-2xl">
              We can share additional project examples relevant to your brief on request.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Request examples <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
