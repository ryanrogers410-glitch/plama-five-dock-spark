import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-structure.jpg";
import secCommercial from "@/assets/sector-commercial.jpg";
import secResidential from "@/assets/sector-residential.jpg";
import secMarine from "@/assets/sector-marine.jpg";
import secHealthcare from "@/assets/sector-healthcare.jpg";
import svcStructural from "@/assets/service-structural.jpg";
import svcCivil from "@/assets/service-civil.jpg";
import svcFacade from "@/assets/service-facade.jpg";
import svcMarine from "@/assets/service-marine.jpg";
import { ShieldCheck, Layers, Sparkles, Wallet, Gauge, Headphones } from "lucide-react";
import { services } from "@/data/services";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plama Projects — Engineering Consultancy, Five Dock NSW" },
      { name: "description", content: "Sydney-based multidisciplinary engineering consultancy delivering structural, civil, façade, marine and hydraulic engineering — senior-led, in-house, end-to-end." },
    ],
  }),
  component: Home,
});

const serviceImages: Record<string, string> = {
  structural: svcStructural,
  civil: svcCivil,
  facade: svcFacade,
  marine: svcMarine,
};

const featuredServices = services
  .filter((s) => ["structural", "civil", "facade", "marine"].includes(s.slug))
  .map((s) => ({ ...s, image: serviceImages[s.slug] }));

const strengths = [
  { icon: ShieldCheck, title: "Fully Insured & Accredited", desc: "Chartered engineers, complete professional indemnity coverage." },
  { icon: Layers, title: "All Disciplines In-House", desc: "One team, one accountability — no outsourcing, no handover gaps." },
  { icon: Sparkles, title: "Innovative Solutions", desc: "Pragmatic engineering that unlocks design intent and reduces cost." },
  { icon: Wallet, title: "Fixed, Transparent Pricing", desc: "Clear scopes and fees agreed up-front. No surprises, ever." },
  { icon: Gauge, title: "Fast Project Delivery", desc: "Responsive turnaround that keeps your program on schedule." },
  { icon: Headphones, title: "Senior-Led Service", desc: "Direct access to senior engineers from brief to certification." },
];

const featuredProjects = [
  {
    img: secResidential,
    title: "High-End Residential",
    tag: "Structural · Civil",
    desc: "Bespoke Sydney homes engineered end-to-end — structural, civil and stormwater coordinated in-house for prestige new builds and knock-down rebuilds.",
  },
  {
    img: secMarine,
    title: "Waterfront Structures",
    tag: "Marine · Hydraulic",
    desc: "Jetties, seawalls and pontoons engineered against Sydney's coastal conditions — full authority approvals and marine-grade detailing.",
  },
];


function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedServices />
      <WhyUs />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] overflow-hidden bg-[var(--brand-deep)]">
      <img src={heroImg} alt="" width={1920} height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a36]/85 via-[#001a36]/55 to-[#001a36]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a36]/70 to-transparent" />

      <div className="relative container-px mx-auto w-full pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl animate-rise">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-white/80">
            <span className="h-px w-10 bg-[var(--accent-orange)]" />
            Engineering Consultancy · Sydney
          </div>
          <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering that<br />
            <span className="italic font-light text-white/90">stands up</span> to
            <span className="text-[var(--accent-orange)]"> scrutiny.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
            Nearly two decades of multidisciplinary engineering for the homes, buildings and
            waterfronts that shape Sydney — with the rigour of a large practice and the
            responsiveness of a boutique.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request a Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2.5 text-white/90 hover:text-white text-sm font-medium px-2 group">
              <span className="border-b border-white/30 group-hover:border-white pb-0.5">Explore our services</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-sm">
          {[
            ["20", "Years of practice"],
            ["10", "Engineering disciplines"],
            ["8", "Sectors served"],
            ["100%", "In-house delivery"],
          ].map(([k, v]) => (
            <div key={v} className="bg-[#001a36]/60 px-5 py-4">
              <div className="font-display text-2xl md:text-3xl text-white">{k}<span className="text-[var(--accent-orange)]">.</span></div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/65">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-px mx-auto w-full py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow">About Plama</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
            A consultancy built on <span className="italic text-[var(--brand)]">precision</span>, trust and craft.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-base leading-relaxed text-[var(--ink-soft)]">
            Plama Projects is a multidisciplinary engineering consultancy headquartered in
            Five Dock, NSW — combining nearly 20 years of practice with a tightly integrated
            in-house team so every project is engineered end-to-end by people who own the outcome.
          </p>
          <div className="mt-6">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
              Learn more about us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <div className="container-px mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Services</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Ten disciplines. <span className="italic text-[var(--brand)]">One team.</span>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredServices.map(({ title, short, route, image }, i) => (
            <Link
              key={title}
              to={route}
              className="group relative overflow-hidden rounded-xl bg-[var(--brand)] aspect-[4/5] block"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a36] via-[#001a36]/60 to-transparent" />
              <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/80">
                    <span className="h-px w-6 bg-[var(--accent-orange)]" />
                    Service
                  </span>
                  <span className="text-[10px] text-white/60">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-3">{short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-white group-hover:text-[var(--accent-orange)] transition-colors">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="container-px mx-auto w-full py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-6">
          <span className="eyebrow">Why Plama</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
            The standard our clients <span className="italic text-[var(--brand)]">come back for.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-sm text-[var(--ink-soft)]">
            Six reasons Sydney architects, builders and developers keep choosing Plama for
            work that has to hold up on paper and on site.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {strengths.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="relative rounded-xl p-4 border border-border bg-white">
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base text-[var(--ink)]">{title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
          More about our approach <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <div className="container-px mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Engineered across the <span className="italic text-[var(--brand)]">built environment.</span>
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
            View portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredProjects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-[var(--brand)]">
              <img src={p.img} alt={p.title} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a36]/95 via-[#001a36]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">{p.tag}</div>
                <div className="mt-1 font-display text-lg">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
