import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/data/photos";

const heroImg = photos.diningWide;
const proj1 = photos.siteNewBuild;
const proj2 = photos.siteSteelFrame;

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
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20180914_150128-scaled.jpg", 
    title: "NEW BUILT", 
    subtitle: "Knock Down - Rebuilt",
    location: "Sydney Metro", 
    tags: ["Structural", "Civil"], 
    desc: "A significant residential new build featuring comprehensive structural and civil engineering solutions." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20170430_075357-1-scaled.jpg", 
    title: "TOWNHOUSES", 
    subtitle: "Knock Down - Rebuilt",
    location: "Sydney Metro", 
    tags: ["Structural", "Civil"], 
    desc: "High-density residential development with complex structural framing and site coordination." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/05/style_2_right1-1.jpeg", 
    title: "RENOVATIONS", 
    subtitle: "Alterations & Additions",
    location: "Five Dock", 
    tags: ["Structural", "Civil"], 
    desc: "Sophisticated interior renovations requiring meticulous structural interventions and design sensitivity." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20170430_075357-1-scaled.jpg", 
    title: "FACADE", 
    subtitle: "FACADE ENGINEERING",
    location: "Sydney Metro", 
    tags: ["Facade"], 
    desc: "Structural facade engineering for multi-story residential construction, ensuring safety and architectural intent." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/flood-map-scaled.jpg", 
    title: "FLOOD STUDY", 
    subtitle: "Hydraulic & Stormwater",
    location: "Sydney", 
    tags: ["Hydraulic", "Stormwater"], 
    desc: "Detailed flood mapping and hydraulic analysis for site feasibility and development approval." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/stamped_1-AEP-Suspended-Floor-Max-Water-Depth-scaled.jpg", 
    title: "DRAINAGE", 
    subtitle: "Stormwater Management",
    location: "Sydney Metro", 
    tags: ["Stormwater"], 
    desc: "Engineered stormwater drainage systems for complex urban residential developments." 
  },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="We Have Solutions for A Wide Range of"
        italic="Projects"
        accent="!"
        body="A representative selection of the residential, commercial, and infrastructure work delivered by our multidisciplinary team."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => {
            const idx = String(i + 1).padStart(2, "0");
            const isRight = i % 2 === 0;
            return (
              <div key={p.title} className="relative grid grid-cols-12 gap-3 md:gap-6 items-center">
                <div className={`col-span-11 ${isRight ? "col-start-1" : "col-start-2"} relative`}>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group rounded-lg">
                    <img src={p.img} alt={p.title} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <div className={`col-span-11 md:col-span-6 -mt-10 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${isRight ? "col-start-2 md:right-0" : "col-start-1 md:left-0"}`}>
                  <div className={`bg-[var(--brand)] text-white p-5 md:p-7 shadow-xl ${isRight ? "border-l-4" : "border-r-4"} border-[var(--accent-orange)]`}>
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/60">
                      <span>{idx}</span>
                      <span className="h-px w-8 bg-[var(--accent-orange)]" />
                      <span>{p.subtitle || "Project"}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl italic">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 max-w-md">{p.desc}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white group/link">
                      Enquire <span className="h-px w-6 bg-[var(--accent-orange)] transition-all group-hover/link:w-10" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
