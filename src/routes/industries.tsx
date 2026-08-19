import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/data/photos";

const secResidential = photos.livingWindowWide;
const secCommercial = photos.kitchenIslandWide;
const secHealthcare = photos.siteFitout;
const secMarine = photos.siteNewBuild;
const heroImg = photos.interiorLivingWide;

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Plama Projects" },
      { name: "description", content: "Residential, commercial, healthcare, marine, industrial and public-realm engineering across Sydney." },
      { property: "og:title", content: "Industries — Plama Projects" },
      { property: "og:description", content: "Engineering across the built environment — the industries we serve." },
    ],
  }),
  component: Industries,
});

const sectors = [
  { img: secResidential, title: "Residential", desc: "Professional engineers involving in diverse design and construction of all sectors." },
  { img: secCommercial, title: "Commercial", desc: "Designing, analyzing, and maintaining the adequacy and integrity of commercial structures." },
  { img: secHealthcare, title: "Healthcare, Hospital and Sport Center", desc: "Providing innovative solutions and reliable services for critical community projects." },
  { img: secMarine, title: "Knock-down and Rebuild", desc: "Ensuring safety, security and compliance for residential redevelopment projects." },
];

const tags = ["Residential", "Commercial", "Shop Fit-outs", "Industrial", "Healthcare", "Hospitals", "Sports Centres", "Knock Down & Rebuild", "Marine", "Public Realm", "Education", "Hospitality"];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Engineering across the"
        italic="built"
        accent=" environment."
        body="We've engineered for families, builders, healthcare providers and waterfront developers — bringing the same rigour and senior-led attention to every brief."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {sectors.map(({ img, title, desc }, i) => {
            const idx = String(i + 1).padStart(2, "0");
            const isRight = i % 2 === 0;
            return (
              <div key={title} className="relative grid grid-cols-12 gap-3 md:gap-6 items-center">
                <div className={`col-span-11 ${isRight ? "col-start-1" : "col-start-2"} relative`}>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group rounded-lg">
                    <img src={img} alt={title} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <div className={`col-span-11 md:col-span-6 -mt-10 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${isRight ? "col-start-2 md:right-0" : "col-start-1 md:left-0"}`}>
                  <div className={`bg-[var(--brand)] text-white p-5 md:p-7 shadow-xl ${isRight ? "border-l-4" : "border-r-4"} border-[var(--accent-orange)]`}>
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/60">
                      <span>{idx}</span>
                      <span className="h-px w-8 bg-[var(--accent-orange)]" />
                      <span>Sector</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl italic">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 max-w-md">{desc}</p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white group/link">
                      Enquire <span className="h-px w-6 bg-[var(--accent-orange)] transition-all group-hover/link:w-10" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-14 md:py-20">
        <div className="container-px mx-auto w-full">
          <div className="max-w-2xl">
            <span className="eyebrow">Sectors & specialties</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)]">
              A wide brief, deeply delivered.
            </h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-[var(--ink)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
              Explore our services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
