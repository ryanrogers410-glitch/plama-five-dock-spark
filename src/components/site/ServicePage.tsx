import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services, type ServiceDef } from "@/data/services";
import { servicePhotos } from "@/data/photos";

export function ServicePage({ service }: { service: ServiceDef }) {
  const Icon = service.icon;
  const set = servicePhotos[service.slug] ?? servicePhotos.structural;
  const imgUrl = set.hero;
  const portraitUrl = set.portrait;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);


  return (
    <>
      <PageHero
        eyebrow={`Services — ${service.eyebrow}`}
        title={service.title}
        body={service.short}
        image={imgUrl}
      />

      {/* Overview — asymmetric with portrait image */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="text-sm tracking-[0.2em] uppercase text-[var(--accent-orange)] font-semibold">
                {service.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--ink)] leading-[1.1]">
              {service.title}
              {service.hero.italic && (
                <span className="italic font-light text-[var(--brand)]"> {service.hero.italic}</span>
              )}
              {service.hero.accent && (
                <span className="text-[var(--accent-orange)]">{service.hero.accent}</span>
              )}
            </h2>
            <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed">{service.intro}</p>

            <h3 className="mt-12 font-display text-2xl text-[var(--ink)]">What we deliver</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {service.offerings.map((offering) => (
                <div key={offering} className="flex items-start gap-3 group">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-orange)]" />
                  <span className="text-sm md:text-base text-[var(--ink)] leading-snug">{offering}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={portraitUrl}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white">
                <p className="text-xs uppercase tracking-widest text-white/80 mb-2">Service Discipline</p>
                <h4 className="font-display text-xl">{service.title}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — horizontal columns */}
      <section className="bg-[var(--surface)] border-y border-border py-16 md:py-24">
        <div className="container-px mx-auto w-full">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)]">
            Our <span className="italic text-[var(--brand)]">process.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {service.process.map((p) => (
              <div key={p.step} className="relative">
                <span className="font-display text-5xl text-[var(--accent-orange)]/30">{p.step}</span>
                <h3 className="mt-4 font-display text-xl text-[var(--ink)]">{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{p.desc}</p>
                <div className="mt-5 h-px w-12 bg-[var(--accent-orange)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <span className="eyebrow">Why Plama</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] max-w-2xl">
          The value we bring to <span className="italic text-[var(--brand)]">every project.</span>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-[var(--surface)] p-7 transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-1.5 w-10 rounded-full bg-[var(--accent-orange)]" />
              <h3 className="mt-5 font-display text-lg text-[var(--ink)]">{b.title}</h3>
              <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries + Related services — vertical columns */}
      <section className="bg-[var(--brand-deep)] text-white py-16 md:py-24">
        <div className="container-px mx-auto w-full grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-white/60">Sectors</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Industries <span className="italic text-white/80">served.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {service.industries.map((ind) => (
                <li key={ind} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)] shrink-0" />
                  <span className="text-white/85">{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="eyebrow text-white/60">Keep exploring</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Related <span className="italic text-white/80">services.</span>
            </h2>
            <ul className="mt-8 divide-y divide-white/10">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    <div>
                      <h3 className="font-display text-xl text-white group-hover:text-[var(--accent-orange)] transition">
                        {r.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60 line-clamp-1">{r.short}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 group-hover:text-[var(--accent-orange)] group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs (if defined for the service) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="container-px mx-auto w-full py-16 md:py-24">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)]">
            Frequently asked <span className="italic text-[var(--brand)]">questions.</span>
          </h2>
          <div className="mt-10 max-w-3xl divide-y divide-border">
            {service.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg text-[var(--ink)]">
                  {f.q}
                  <ArrowUpRight className="h-4 w-4 shrink-0 rotate-45 text-[var(--accent-orange)] transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm md:text-base text-[var(--ink-soft)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
