import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: {
  eyebrow?: string; title: string; subtitle?: string; children?: ReactNode;
}) {
  return (
    <section className="gradient-hero grain relative overflow-hidden pt-36 pb-24 text-white">
      <div className="container-lux relative z-10">
        <div className="max-w-3xl animate-reveal">
          {eyebrow && <span className="eyebrow bg-white/10 border-white/15 text-white">{eyebrow}</span>}
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 text-balance">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
      <div className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
    </section>
  );
}
