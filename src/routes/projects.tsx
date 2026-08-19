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
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/05/video-bg-1-1.jpg", 
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <article key={p.title} className="group bg-white border border-border rounded-xl overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--brand)]">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-orange)]">
                  {p.subtitle || p.location}
                </div>
                <h3 className="mt-2 font-display text-xl text-[var(--ink)] tracking-wide">{p.title}</h3>
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
