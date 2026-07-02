import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { services, type ServiceDef } from "@/data/services";
import heroImg from "@/assets/hero-structure.jpg";
import imgStructural from "@/assets/service-structural.jpg";
import imgCivil from "@/assets/service-civil.jpg";
import imgFacade from "@/assets/service-facade.jpg";
import imgMarine from "@/assets/service-marine.jpg";
import imgHydraulic from "@/assets/service-hydraulic.jpg";
import imgExpert from "@/assets/service-expert.jpg";
import imgPm from "@/assets/service-pm.jpg";
import imgDetail from "@/assets/service-detail.jpg";

const serviceImages: Record<string, string> = {
  structural: imgStructural,
  civil: imgCivil,
  facade: imgFacade,
  marine: imgMarine,
  hydraulic: imgHydraulic,
  "expert-reports": imgExpert,
  "project-management": imgPm,
};

export function ServicePage({ service }: { service: ServiceDef }) {
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const primary = serviceImages[service.slug] ?? heroImg;

  return (
    <>
      <PageHero
        eyebrow={`Services · ${service.eyebrow}`}
        title={service.title.split(" ")[0]}
        italic={service.hero.italic}
        accent={service.hero.accent}
        body={service.short}
        image={heroImg}
      />

      {/* Overview — asymmetric with vertical image */}
      <section className="container-px mx-auto w-full py-14 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={primary}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a36]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--accent-orange)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="text-xs tracking-[0.22em] uppercase text-white/90">
                  {service.eyebrow} · In-house team
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="hidden lg:block absolute -right-6 top-8 bg-white border border-border rounded-xl shadow-lg px-5 py-4 max-w-[220px]">
              <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-orange)]">Delivered by</div>
              <div className="mt-1 font-display text-base text-[var(--ink)] leading-snug">
                Chartered engineers, senior-led from day one.
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-6 order-1 lg:order-2">
            <span className="eyebrow">Overview</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[var(--ink)] text-balance leading-[1.05]">
              {service.title.split(" ")[0]}{" "}
              <span className="italic text-[var(--brand)]">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)] max-w-xl">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6 max-w-xl">
              <div>
                <div className="font-display text-3xl text-[var(--brand)]">15+</div>
                <div className="text-xs tracking-[0.15em] uppercase text-[var(--ink-soft)]">Years experience</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-[var(--brand)]">Fixed</div>
                <div className="text-xs tracking-[0.15em] uppercase text-[var(--ink-soft)]">Fees, agreed up-front</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-[var(--brand)]">In-house</div>
                <div className="text-xs tracking-[0.15em] uppercase text-[var(--ink-soft)]">Certification</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings — split-screen with dark image panel */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[380px] lg:min-h-[560px]">
            <img
              src={primary}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#001a36]/70" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-14 text-white">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
                <span className="h-px w-8 bg-[var(--accent-orange)]" /> What we deliver
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-balance leading-[1.05]">
                A single team for every part of the{" "}
                <span className="italic text-white/80">discipline.</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                One accountable engineering team from brief through to certification —
                no hand-offs, no gaps.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 md:p-14 flex flex-col justify-center">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {service.offerings.map((o, i) => (
                <li
                  key={o}
                  className="flex items-start gap-3 pb-4 border-b border-border/60 text-[var(--ink)]"
                >
                  <span className="mt-0.5 text-xs font-semibold tracking-[0.15em] text-[var(--accent-orange)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm md:text-[15px] leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process — vertical timeline with connecting spine */}
      <section className="bg-[var(--surface)] py-14 md:py-24">
        <div className="container-px mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Our Process</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-[var(--ink)] text-balance leading-[1.05]">
                Brief to{" "}
                <span className="italic text-[var(--brand)]">certification.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-[var(--ink-soft)] leading-relaxed">
                Four disciplined stages. Every stage owned by a chartered engineer,
                every deliverable coordinated in-house.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* spine */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-8 md:space-y-14">
              {service.process.map((p, i) => {
                const left = i % 2 === 0;
                return (
                  <div
                    key={p.step}
                    className="grid md:grid-cols-2 gap-6 md:gap-12 items-center relative"
                  >
                    {/* dot */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[var(--accent-orange)] ring-4 ring-[var(--surface)] z-10" />

                    <div className={left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}>
                      <div className="font-display text-6xl md:text-7xl text-[var(--brand)]/15 leading-none">
                        {p.step}
                      </div>
                      <h3 className="mt-2 font-display text-2xl text-[var(--ink)]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[var(--ink-soft)] leading-relaxed max-w-md md:max-w-none">
                        {p.desc}
                      </p>
                    </div>
                    <div className={left ? "md:col-start-2 md:pl-10" : "md:col-start-1 md:row-start-1 md:pr-10"}>
                      <div className="h-40 md:h-56 rounded-xl overflow-hidden relative">
                        <img
                          src={i % 2 === 0 ? primary : imgDetail}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[var(--brand)]/20" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — bento grid with image tile */}
      <section className="container-px mx-auto w-full py-14 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-6">
            <span className="eyebrow">Why Plama</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[var(--ink)] text-balance leading-[1.05]">
              The standard our clients{" "}
              <span className="italic text-[var(--brand)]">come back for.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {/* Feature image tile spanning two cols */}
          <div className="relative lg:col-span-2 lg:row-span-2 min-h-[280px] rounded-2xl overflow-hidden">
            <img
              src={primary}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#001a36]/85 via-[#001a36]/55 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--accent-orange)]">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-white/70">
                  {service.eyebrow}
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl leading-tight max-w-sm">
                  Engineering you can{" "}
                  <span className="italic text-white/85">defend and build.</span>
                </h3>
              </div>
            </div>
          </div>

          {service.benefits.map((b, i) => (
            <div
              key={b.title}
              className={`rounded-2xl border border-border bg-white p-6 flex flex-col ${
                i === 0 ? "lg:bg-[var(--brand)] lg:text-white lg:border-transparent" : ""
              }`}
            >
              <div
                className={`text-xs tracking-[0.22em] uppercase ${
                  i === 0 ? "lg:text-[var(--accent-orange)]" : "text-[var(--accent-orange)]"
                }`}
              >
                0{i + 1}
              </div>
              <h3
                className={`mt-3 font-display text-lg ${
                  i === 0 ? "lg:text-white text-[var(--ink)]" : "text-[var(--ink)]"
                }`}
              >
                {b.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  i === 0 ? "lg:text-white/80 text-[var(--ink-soft)]" : "text-[var(--ink-soft)]"
                }`}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries served */}
      <section className="bg-[var(--brand)] text-white py-14 md:py-20">
        <div className="container-px mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
              <span className="h-px w-8 bg-[var(--accent-orange)]" /> Industries served
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-balance">
              Trusted across the <span className="italic">built environment.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-wrap gap-2">
            {service.industries.map((i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 text-sm text-white/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs — asymmetric with side image */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="container-px mx-auto w-full py-14 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="eyebrow">FAQs</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)]">
                Common{" "}
                <span className="italic text-[var(--brand)]">questions.</span>
              </h2>
              <div className="mt-6 hidden lg:block aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img
                  src={imgDetail}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-border border-y border-border">
                {service.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <h3 className="font-display text-lg text-[var(--ink)]">{f.q}</h3>
                    <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="bg-[var(--surface)] py-14 md:py-20">
        <div className="container-px mx-auto w-full">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow">Related services</span>
              <h2 className="mt-4 font-display text-2xl md:text-3xl text-[var(--ink)]">
                Explore adjacent disciplines.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium text-[var(--brand)] hover:text-[var(--accent-orange)] inline-flex items-center gap-1"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to={r.route}
                  className="group bg-white border border-border rounded-xl p-5 hover:border-[var(--brand)] transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--accent-orange)] group-hover:text-white transition">
                    <RIcon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-display text-base text-[var(--ink)]">{r.title}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed">{r.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--brand)] group-hover:text-[var(--accent-orange)]">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={`Start a ${service.eyebrow.toLowerCase()} project`}
        title={
          <>
            Ready to brief a<br />
            <span className="italic text-white/80">{service.title.toLowerCase()}</span>
            <span className="text-[var(--accent-orange)]"> project?</span>
          </>
        }
      />
    </>
  );
}

// keep Check import used to avoid unused import lint if tree-shaken
void Check;
