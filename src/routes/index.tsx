import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Sparkles, Building2, Users, Wrench, ClipboardCheck,
  BadgeCheck, Star, MapPin, Phone, ArrowUpRight, Check
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import interiorImg from "@/assets/interior-1.jpg";
import { properties, formatPrice } from "@/lib/properties";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reel to Real Property Management Ltd | Middlesbrough Lettings" },
      { name: "description", content: "Premium property management in Middlesbrough. Full-service lettings, landlord & tenant services, rent collection, maintenance and free valuations from a team that treats every home like their own." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { k: "500+", v: "Properties Managed" },
  { k: "1,200+", v: "Happy Clients" },
  { k: "12+", v: "Years Experience" },
  { k: "98%", v: "Client Satisfaction" },
];

const services = [
  { icon: Building2, title: "Full Property Management", desc: "End-to-end letting and management, from marketing to move-out." },
  { icon: Users, title: "Landlord & Tenant Services", desc: "Bespoke packages tailored to portfolios of any size." },
  { icon: Wrench, title: "Maintenance & Repairs", desc: "Vetted trades, 24/7 emergency support and proactive care." },
  { icon: ClipboardCheck, title: "Compliance & Inspections", desc: "Gas, EICR, EPC, deposit protection — all handled for you." },
];

const testimonials = [
  { name: "Sarah H.", role: "Landlord, Middlesbrough", quote: "The most professional agency I've used in twelve years of letting. Communication is exceptional." },
  { name: "James P.", role: "Tenant, Linthorpe", quote: "Genuinely lovely people. Repairs handled within hours, not weeks. The bar has been raised." },
  { name: "Priya S.", role: "Portfolio Landlord", quote: "They doubled my occupancy rate and cut voids in half. I only wish I'd found them sooner." },
];

function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury Middlesbrough townhouse at dusk"
          width={1920} height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_30%,rgba(58,134,255,0.35),transparent_60%)]" />

        <div className="container-lux relative z-10 flex min-h-[92vh] flex-col justify-center pt-28 pb-16 text-white">
          <div className="max-w-3xl [text-shadow:0_2px_20px_rgba(11,19,43,0.5)]">
            <span className="eyebrow border-white/25 bg-white/10 backdrop-blur text-white animate-reveal">
              <Sparkles className="h-3 w-3" /> Premium Property Management · Middlesbrough
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[80px] font-bold leading-[1.02] tracking-tight text-white text-balance animate-reveal drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]" style={{ animationDelay: "80ms" }}>
              Property, <span className="gradient-text">reimagined</span> for the modern landlord.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/95 text-balance animate-reveal" style={{ animationDelay: "160ms" }}>
              We manage exceptional homes across Middlesbrough and the North East — pairing
              hands-on care with modern systems, so your property is always working for you.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 animate-reveal" style={{ animationDelay: "240ms" }}>
              <Link to="/valuation" className="btn-shine group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-white/95">
                Free Property Valuation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/properties" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15">
                View Properties
              </Link>
              <Link to="/landlords" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white/85 hover:text-white">
                I'm a Landlord <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-6 animate-reveal" style={{ animationDelay: "320ms" }}>
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">{s.k}</div>
                  <div className="mt-1 text-[12px] uppercase tracking-[0.14em] text-white/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* floating card */}
          <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block animate-float">
            <div className="glass w-[280px] rounded-2xl p-5 text-ink shadow-luxe">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-accent font-semibold">
                <BadgeCheck className="h-3.5 w-3.5" /> Featured Listing
              </div>
              <div className="mt-3 font-display text-lg font-bold">The Linthorpe Townhouse</div>
              <div className="mt-1 flex items-center gap-1 text-[13px] text-ink-soft">
                <MapPin className="h-3.5 w-3.5" /> Middlesbrough · 4 bed
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display text-2xl font-bold text-primary">£1,450<span className="text-xs font-medium text-ink-soft"> / month</span></div>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">New</span>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60">
          <div className="mx-auto h-10 w-6 rounded-full border border-white/30 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-white/50">
        <div className="container-lux flex flex-wrap items-center justify-between gap-6 py-6 text-[12px] uppercase tracking-[0.16em] text-ink-soft">
          <span className="font-semibold text-ink">Trusted regulatory partners</span>
          <span>ARLA Propertymark</span>
          <span>The Property Ombudsman</span>
          <span>Deposit Protection Service</span>
          <span>Client Money Protect</span>
          <span>ICO Registered</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink text-balance">
                A modern property partner<br/>with an old-world sense of care.
              </h2>
            </div>
            <p className="lg:col-span-6 text-lg text-ink-soft max-w-xl lg:justify-self-end">
              Every service is designed around one belief — property is personal. Our team looks after every
              home like it's their own, so landlords sleep easy and tenants feel at home.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card-lux group relative overflow-hidden p-7 hover-lift animate-reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-luxe transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{desc}</p>
                <div className="absolute right-6 bottom-6 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-accent">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SPLIT: WHY CHOOSE US */}
      <section className="py-24 bg-primary text-white relative overflow-hidden grain">
        <div className="absolute -top-40 -left-20 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl" />
        <div className="container-lux relative grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-luxe">
              <img src={interiorImg} alt="Luxury apartment interior" width={1600} height={1200} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block card-lux p-5 text-ink w-[240px]">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="mt-2 font-display text-2xl font-bold">4.9 / 5</div>
              <div className="text-[12px] text-ink-soft">Independent client rating</div>
            </div>
          </div>
          <div>
            <span className="eyebrow border-white/20 bg-white/10 text-white">Why choose us</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white text-balance">
              A quieter kind of confidence.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              We combine best-in-class technology with the human touch — because behind every property is a person, and behind every tenancy is a story.
            </p>
            <ul className="mt-8 grid gap-3">
              {[
                "Dedicated property manager for every landlord",
                "Same-day response guarantee, 7 days a week",
                "Full compliance with UK letting legislation",
                "Transparent monthly statements & digital portal",
                "Referenced tenants, protected deposits, insured rents",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-white/85">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/about" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/95">About Us</Link>
              <Link to="/contact" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/15">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Featured properties</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">Currently available.</h2>
            </div>
            <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-muted/50">
        <div className="container-lux">
          <div className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">Four steps to peace of mind.</h2>
          </div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Free Valuation", d: "We visit, appraise and advise — no obligation, no pressure." },
              { n: "02", t: "Marketing & Match", d: "Premium photography and vetted portals to find the right tenant." },
              { n: "03", t: "Move-in", d: "Referencing, deposit, contracts and inventory — handled." },
              { n: "04", t: "Ongoing Care", d: "Rent, maintenance and compliance managed monthly." },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                <div className="font-display text-6xl font-bold text-accent/25">{s.n}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-soft">{s.d}</p>
                {i < 3 && <div className="absolute top-8 -right-4 hidden lg:block text-accent/30"><ArrowRight className="h-6 w-6"/></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Client stories</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">Loved by landlords. Trusted by tenants.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-lux p-8 hover-lift">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-5 text-lg leading-relaxed text-ink">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">{t.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{t.name}</div>
                    <div className="text-xs text-ink-soft">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + CTA */}
      <section className="pb-24">
        <div className="container-lux">
          <div className="relative overflow-hidden rounded-[2rem] gradient-hero grain p-10 md:p-16 text-white shadow-luxe">
            <div className="absolute -top-40 -right-20 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow border-white/20 bg-white/10 text-white">Get in touch</span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white text-balance">
                  Ready to hand over the keys — <span className="gradient-text">to peace of mind</span>?
                </h2>
                <p className="mt-5 max-w-lg text-white/75 text-lg">
                  Book a free property valuation and see why landlords across Middlesbrough
                  are switching to Reel to Real.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/valuation" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/95">
                    Request Free Valuation
                  </Link>
                  <a href="tel:+447435768555" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">
                    <Phone className="h-4 w-4"/> +44 7435 768555
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-white/15 shadow-luxe">
                  <iframe
                    title="Reel to Real Property Management — Middlesbrough"
                    src="https://www.google.com/maps?q=37+Princes+Rd,+Middlesbrough+TS1+4BE&output=embed"
                    width="100%" height="340" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
