import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { services, type ServiceDef } from "@/data/services";
import heroImg from "@/assets/hero-structure.jpg";

export function ServicePage({ service }: { service: ServiceDef }) {
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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

      {/* Intro + offerings */}
      <section className="container-px mx-auto w-full py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Overview</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
              {service.intro}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[var(--brand)]/5 border border-[var(--brand)]/15 px-4 py-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--brand)] text-white">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <div className="text-sm text-[var(--ink)]">
                Delivered in-house by chartered engineers · Fixed fees · Fast turnaround
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              What we deliver
            </div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {service.offerings.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                  <Check className="h-4 w-4 mt-0.5 text-[var(--accent-orange)] shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--surface)] py-14 md:py-20">
        <div className="container-px mx-auto w-full">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Process</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              How a project moves from <span className="italic text-[var(--brand)]">brief to certification.</span>
            </h2>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {service.process.map((p) => (
              <div key={p.step} className="bg-white p-5">
                <div className="text-xs tracking-[0.22em] uppercase text-[var(--accent-orange)]">
                  {p.step}
                </div>
                <h3 className="mt-2 font-display text-lg text-[var(--ink)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-px mx-auto w-full py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-8">
          <div className="lg:col-span-6">
            <span className="eyebrow">Why Plama</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              The standard our clients <span className="italic text-[var(--brand)]">come back for.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {service.benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-white p-5">
              <h3 className="font-display text-base text-[var(--ink)]">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">{b.desc}</p>
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

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="container-px mx-auto w-full py-14 md:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)]">
              Common questions.
            </h2>
          </div>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {service.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-display text-lg text-[var(--ink)]">{f.q}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed max-w-3xl">
                  {f.a}
                </p>
              </div>
            ))}
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
            <Link to="/services" className="text-sm font-medium text-[var(--brand)] hover:text-[var(--accent-orange)] inline-flex items-center gap-1">
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
