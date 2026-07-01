import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import heroImg from "@/assets/hero-structure.jpg";
import plamaLogo from "@/assets/plama-logo.png.asset.json";
import founderImg from "@/assets/founder-lucas.jpg";
import secCommercial from "@/assets/sector-commercial.jpg";
import secResidential from "@/assets/sector-residential.jpg";
import secMarine from "@/assets/sector-marine.jpg";
import secHealthcare from "@/assets/sector-healthcare.jpg";
import {
  ArrowUpRight, Phone, Mail, MapPin, Clock, Building2, Waves, Droplets,
  FileText, BadgeCheck, ClipboardList, HardHat, Layers, Compass, ShieldCheck,
  Gauge, Sparkles, Wallet, Headphones, Hammer, Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plama Projects — Engineering Consultancy, Five Dock NSW" },
      { name: "description", content: "Plama Projects delivers structural, civil, façade, marine, and hydraulic engineering across Sydney with nearly 20 years of experience." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Building2, title: "Structural Engineering", desc: "Robust, code-compliant structural design for buildings of every scale." },
  { icon: HardHat, title: "Civil Engineering", desc: "Site civil works, earthworks, pavements and infrastructure design." },
  { icon: Layers, title: "Glass & Façade Engineering", desc: "Curtain walls, structural glazing and high-performance façade systems." },
  { icon: Waves, title: "Marine Structural Engineering", desc: "Jetties, seawalls, pontoons and waterfront structures." },
  { icon: Droplets, title: "Hydrologic & Hydraulic", desc: "Flood studies, drainage strategies and water management." },
  { icon: FileText, title: "Expert Reports", desc: "Independent expert engineering reports and forensic assessments." },
  { icon: BadgeCheck, title: "Engineering Certificates", desc: "Compliance certificates issued by registered engineers." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end development and project delivery management." },
  { icon: Compass, title: "Stormwater Engineering", desc: "On-site detention, WSUD and stormwater concept to construction." },
  { icon: Sparkles, title: "Engineering Consulting", desc: "Strategic advisory on feasibility, value engineering and risk." },
];

const sectors = [
  { img: secResidential, title: "Residential" },
  { img: secCommercial, title: "Commercial" },
  { img: secHealthcare, title: "Healthcare & Hospitals" },
  { img: secMarine, title: "Marine & Waterfront" },
];

const sectorTags = ["Residential", "Commercial", "Shop Fit-outs", "Industrial", "Healthcare", "Hospitals", "Sports Centres", "Knock Down & Rebuild"];

const strengths = [
  { icon: ShieldCheck, title: "Fully Insured & Accredited", desc: "Registered engineers with complete professional indemnity coverage." },
  { icon: Layers, title: "All Disciplines In-House", desc: "One team, one accountability — no outsourcing, no handover gaps." },
  { icon: Sparkles, title: "Innovative Solutions", desc: "Pragmatic engineering that unlocks design intent and reduces cost." },
  { icon: Wallet, title: "Fixed, Transparent Pricing", desc: "Clear scopes and fees agreed up-front. No surprises, ever." },
  { icon: Gauge, title: "Fast Project Delivery", desc: "Responsive turnaround that keeps your program on schedule." },
  { icon: Headphones, title: "Exceptional Service", desc: "Direct access to senior engineers from brief to certification." },
  { icon: Hammer, title: "High-Quality Workmanship", desc: "Documentation built for builders — clear, buildable, defensible." },
];


function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <Sectors />
      <Founder />
      <Strengths />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="flex items-center">
          <img src={plamaLogo.url} alt="Plama Projects" className="h-10 md:h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/85">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#sectors" className="hover:text-white transition">Sectors</a>
          <a href="#founder" className="hover:text-white transition">Founder</a>
          <a href="#strengths" className="hover:text-white transition">Why Us</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[var(--brand)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--accent-orange)] hover:text-white transition">
          Request Consultation <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] overflow-hidden bg-[var(--brand-deep)]">
      <img src={heroImg} alt="" width={1920} height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a36]/85 via-[#001a36]/55 to-[#001a36]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a36]/70 to-transparent" />

      <div className="relative container-px mx-auto max-w-7xl pt-28 pb-12 md:pt-32 md:pb-14">
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
            For nearly two decades, Plama Projects has delivered multidisciplinary engineering
            for the homes, buildings and waterfronts that shape Sydney — with the rigour of a
            large practice and the responsiveness of a boutique.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Request a Consultation <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2.5 text-white/90 hover:text-white text-sm font-medium px-2 group">
              <span className="border-b border-white/30 group-hover:border-white pb-0.5">Explore our services</span>
            </a>
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

function Marquee() {
  const items = ["Structural", "Civil", "Façade", "Marine", "Hydraulic", "Expert Reports", "Certificates", "Project Management", "Stormwater", "Consulting"];
  const row = [...items, ...items];
  return (
    <div className="relative bg-white border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-6 text-[var(--brand)]/70">
            <span className="font-display text-lg md:text-xl italic">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="container-px mx-auto max-w-7xl py-10 md:py-14">
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
            Five Dock, NSW. We combine nearly 20 years of practice with a tightly integrated
            in-house team, so every project — from a knock-down rebuild to a hospital fit-out —
            is engineered by people who own the outcome end-to-end.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">
            We're known for clear documentation, fixed pricing and senior engineers who pick up
            the phone. That's the standard our clients return for.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {[
              ["Founded", "Sydney, NSW"],
              ["Practice", "~20 Years"],
              ["Team", "Multidisciplinary"],
              ["Approach", "Senior-led"],
            ].map(([l, v]) => (
              <div key={l} className="bg-white p-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">{l}</div>
                <div className="mt-1 font-display text-base text-[var(--ink)]">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[var(--surface)] py-10 md:py-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Services</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Ten disciplines. <span className="italic text-[var(--brand)]">One team.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-[var(--ink-soft)]">
            From concept feasibility through certification, every service is delivered by
            registered engineers under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title}
              className="group relative bg-white p-4 lg:p-5 transition-all duration-500 hover:bg-[var(--brand)]">
              <div className="flex items-start justify-between mb-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--accent-orange)] group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] text-[var(--ink-soft)]/70 group-hover:text-white/60 transition-colors">0{i + 1}</span>
              </div>
              <h3 className="font-display text-base text-[var(--ink)] group-hover:text-white transition-colors">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)] group-hover:text-white/75 transition-colors">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectors" className="container-px mx-auto max-w-7xl py-10 md:py-14">
      <div className="grid lg:grid-cols-12 gap-8 mb-6">
        <div className="lg:col-span-7">
          <span className="eyebrow">Industries</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
            Engineering across the <span className="italic text-[var(--brand)]">built environment.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 flex items-end">
          <p className="text-sm text-[var(--ink-soft)]">
            We've engineered for families, builders, healthcare providers and waterfront
            developers — bringing the same rigour to every brief.
          </p>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {sectors.map(({ img, title }, i) => {
          const idx = String(i + 1).padStart(2, "0");
          const desc = [
            "Bespoke high-performance homes engineered for longevity, comfort and sustainability.",
            "Scaled commercial builds delivered with precision, program discipline and buildable documentation.",
            "Critical infrastructure for life-saving environments — technical rigour with human-centred design.",
            "Waterfront and marine structures engineered against the harshest coastal conditions.",
          ][i];
          const isRight = i % 2 === 0;
          return (
            <div key={title} className="relative grid grid-cols-12 gap-3 md:gap-6 items-center">
              <div className={`col-span-11 ${isRight ? "col-start-1" : "col-start-2"} relative`}>
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div
                className={`col-span-11 md:col-span-6 -mt-10 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${
                  isRight ? "col-start-2 md:right-0" : "col-start-1 md:left-0"
                }`}
              >
                <div
                  className={`bg-[var(--brand)] text-white p-5 md:p-7 shadow-xl ${
                    isRight ? "border-l-4" : "border-r-4"
                  } border-[var(--accent-orange)]`}
                >
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/60">
                    <span>{idx}</span>
                    <span className="h-px w-8 bg-[var(--accent-orange)]" />
                    <span>Sector</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl italic">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 max-w-md">{desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white group/link"
                  >
                    Enquire
                    <span className="h-px w-6 bg-[var(--accent-orange)] transition-all group-hover/link:w-10" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>


      <div className="mt-6 flex flex-wrap gap-2">
        {sectorTags.map((t) => (
          <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-1 text-xs text-[var(--ink-soft)]">
            <span className="h-1 w-1 rounded-full bg-[var(--accent-orange)]" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="bg-[var(--brand)] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--accent-orange)]/20 blur-3xl" />
      <div className="container-px mx-auto max-w-7xl py-10 md:py-14 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img src={founderImg} alt="Lucas Tran, Principal Engineer & Founder" loading="lazy" width={1024} height={1280}
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
              Lucas founded Plama Projects to bring senior-led engineering to every brief — no
              matter the scale. His work spans residential rebuilds through to large-format
              commercial and healthcare developments across New South Wales.
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
  );
}

function Strengths() {
  return (
    <section id="strengths" className="relative z-20 mx-4 md:mx-auto max-w-6xl -mt-16 md:-mt-24 -mb-16 md:-mb-24 bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-border">
      
      <div className="grid lg:grid-cols-12 gap-8 mb-6">
        <div className="lg:col-span-6">
          <span className="eyebrow">Why Plama</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
            The standard our clients <span className="italic text-[var(--brand)]">come back for.</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {strengths.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className={`relative rounded-xl p-4 border border-border ${i === 0 ? "lg:col-span-2 bg-[var(--surface)]" : "bg-white"}`}>
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
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-[#001a36] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, var(--accent-orange) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand) 0%, transparent 50%)",
      }} />
      <div className="container-px mx-auto max-w-7xl py-10 md:py-14 relative">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
              <span className="h-px w-8 bg-[var(--accent-orange)]" /> Start a Project
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl text-balance">
              Let's engineer<br />
              <span className="italic text-white/80">your next</span>
              <span className="text-[var(--accent-orange)]"> project.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/75 leading-relaxed">
              Tell us about your site, your timeline, and what you're trying to build. We'll
              respond with a fixed scope, fixed fee, and a senior engineer on your call.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="tel:0452588578" className="btn-primary">
                Call 0452 588 578 <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:plama.pro@outlook.com" className="inline-flex items-center gap-2.5 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[var(--brand)] transition">
                Email the Team <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/15 space-y-5">
            <ContactRow icon={Phone} label="Phone" value="0452 588 578" href="tel:0452588578" />
            <ContactRow icon={Mail} label="Email" value="plama.pro@outlook.com" href="mailto:plama.pro@outlook.com" />
            <ContactRow icon={MapPin} label="Office" value={<>1 Kerin Avenue<br />Five Dock NSW 2046</>} />
            <ContactRow icon={Clock} label="Business Hours" value={<>Monday – Friday · 9:00am – 5:30pm<br /><span className="text-white/55">Flexible by appointment</span></>} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Phone; label: string; value: ReactNode; href?: string }) {
  const content = (
    <>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[var(--accent-orange)] shrink-0 group-hover:bg-[var(--accent-orange)] group-hover:text-white transition">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">{label}</div>
        <div className="mt-1 font-display text-base text-white leading-snug">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-3.5 group">{content}</a>
  ) : (
    <div className="flex items-start gap-3.5 group">{content}</div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#000d1f] text-white/70 border-t border-white/10">
      <div className="container-px mx-auto max-w-7xl py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <img src={plamaLogo.url} alt="Plama Projects" className="h-7 w-auto" />
          <span>Plama Projects · Multidisciplinary Engineering Consultancy</span>
        </div>
        <div>© {new Date().getFullYear()} Plama Projects. All rights reserved.</div>
      </div>
    </footer>
  );
}
