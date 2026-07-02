import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import founderImg from "@/assets/founder-lucas.jpg";
import heroImg from "@/assets/hero-structure.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Plama Projects — Sydney Engineering Consultancy" },
      { name: "description", content: "Meet the multidisciplinary Sydney engineering consultancy behind Plama Projects — nearly 20 years of senior-led, in-house engineering." },
      { property: "og:title", content: "About Plama Projects" },
      { property: "og:description", content: "Sydney multidisciplinary engineering consultancy — senior-led, in-house, end-to-end." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Senior-Led", desc: "Every project touched by a chartered engineer from brief to certification." },
  { title: "In-House", desc: "All disciplines under one roof — no outsourcing, no interface gaps." },
  { title: "Buildable", desc: "Documentation written for the builders who read it, not the shelf it sits on." },
  { title: "Transparent", desc: "Fixed scopes, fixed fees, honest reporting — always." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Plama"
        title="A consultancy built on"
        italic="precision,"
        accent=" trust and craft."
        body="Plama Projects is a Sydney-based multidisciplinary engineering consultancy — nearly two decades of practice, delivered by senior engineers who own their outcomes."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              Nearly 20 years engineering the buildings that <span className="italic text-[var(--brand)]">shape Sydney.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-4 text-[var(--ink-soft)] text-base leading-relaxed">
            <p>
              Plama Projects was founded to bring senior-led engineering to every brief —
              no matter the scale. From a knock-down rebuild in the inner west to a hospital
              fit-out or a waterfront revetment, the standard doesn't change.
            </p>
            <p>
              We're headquartered in Five Dock and work across NSW. Our team is deliberately
              multidisciplinary and deliberately in-house, so structural, civil, façade,
              hydraulic and marine engineering all sit under one accountability.
            </p>
            <p>
              The result: clear documentation, fixed pricing and senior engineers who pick up
              the phone. That's the standard our clients return for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-px mx-auto w-full">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              What we hold ourselves to.
            </h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white p-6">
                <div className="text-xs tracking-[0.22em] uppercase text-[var(--accent-orange)]">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl text-[var(--ink)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="bg-[var(--brand)] text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--accent-orange)]/20 blur-3xl" />
        <div className="container-px mx-auto w-full py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img src={founderImg} alt="Lucas Tran, Principal Engineer & Founder" loading="lazy"
                  className="w-full rounded-2xl object-cover aspect-[4/5]" />
                <div className="absolute -bottom-4 -right-4 hidden md:block bg-[var(--accent-orange)] text-white p-4 rounded-xl max-w-[160px]">
                  <div className="font-display text-xl leading-none">20<span className="text-base">+</span></div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em]">Years engineering Sydney</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
                <span className="h-px w-8 bg-[var(--accent-orange)]" /> Founder Spotlight
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-balance">
                Lucas Tran<span className="text-[var(--accent-orange)]">.</span>
              </h2>
              <p className="mt-2 text-white/70 text-sm">Principal Engineer & Founder</p>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Lucas founded Plama Projects to bring senior-led engineering to every brief.
                His work spans residential rebuilds through to large-format commercial and
                healthcare developments across New South Wales.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Chartered Professional Engineer (CPEng)",
                  "Registered Building Practitioner (NSW)",
                  "Engineers Australia — National Engineering Register",
                  "Structural & Civil Engineering Specialisations",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 border-l-2 border-[var(--accent-orange)] pl-3 py-1">
                    <span className="text-xs leading-relaxed text-white/90">{q}</span>
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 border-t border-white/15 pt-5">
                <Quote className="h-4 w-4 text-[var(--accent-orange)] mb-2" />
                <p className="font-display italic text-base md:text-lg text-white/95 text-balance leading-snug">
                  "Great engineering is invisible. It lets architecture, builders and owners do
                  their best work — quietly, and without drama."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { to: "/services", label: "Explore Services", desc: "Structural, civil, façade, hydraulic, marine and more." },
            { to: "/industries", label: "Industries", desc: "Where our engineering is delivered — from homes to hospitals." },
            { to: "/projects", label: "Projects", desc: "A selection of representative work across Sydney." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group bg-white border border-border rounded-xl p-6 hover:border-[var(--brand)] transition-colors">
              <h3 className="font-display text-xl text-[var(--ink)]">{c.label}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">{c.desc}</p>
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
