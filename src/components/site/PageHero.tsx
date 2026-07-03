import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  italic,
  accent,
  body,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  accent?: string;
  body?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-deep)]">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14181C]/90 via-[#14181C]/70 to-[#14181C]/95" />
      <div className="relative container-px mx-auto w-full pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl animate-rise">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-white/80">
            <span className="h-px w-10 bg-[var(--accent-orange)]" />
            {eyebrow}
          </div>
          <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
            {italic && (
              <>
                {" "}
                <span className="italic font-light text-white/90">{italic}</span>
              </>
            )}
            {accent && <span className="text-[var(--accent-orange)]">{accent}</span>}
          </h1>
          {body && (
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
