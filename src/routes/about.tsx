import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Award, Heart, ShieldCheck, TrendingUp, Users, Check } from "lucide-react";
import interior from "@/assets/interior-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Reel to Real Property Management Ltd" },
      { name: "description", content: "Meet the team behind Reel to Real Property Management — a modern, hands-on property partner serving landlords and tenants across Middlesbrough." },
      { property: "og:title", content: "About Reel to Real Property Management" },
      { property: "og:description", content: "Our story, our values and our promise to landlords and tenants." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, t: "People first", d: "Every property has a person behind it. We treat them both with equal care." },
  { icon: ShieldCheck, t: "Radical transparency", d: "Clear pricing, honest advice and no small print — ever." },
  { icon: Award, t: "Craft over volume", d: "Fewer clients, deeper service. Quality is our only KPI." },
  { icon: TrendingUp, t: "Modern by default", d: "Digital reporting, smart marketing, real-time visibility." },
];

const timeline = [
  { y: "2013", t: "Founded in Middlesbrough with a portfolio of 12 homes." },
  { y: "2017", t: "Passed 200 managed properties across the Tees Valley." },
  { y: "2020", t: "Launched our digital landlord portal and 24/7 support." },
  { y: "2024", t: "Named among the region's top-rated boutique agencies." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A property partner built on trust, craft and care."
        subtitle="We started with a simple belief — that landlords deserve honest advice, and tenants deserve a home that's looked after. A decade later, we still lead with both."
      />

      <section className="py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <img src={interior} alt="Modern apartment" width={1600} height={1200} loading="lazy" className="rounded-3xl shadow-luxe" />
          </div>
          <div className="lg:col-span-6">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-ink text-balance">A boutique agency, obsessed with the details others miss.</h2>
            <p className="mt-5 text-lg text-ink-soft">
              Reel to Real Property Management Ltd is an independent, family-run agency based in the heart of Middlesbrough. We
              manage a carefully curated portfolio of residential and commercial properties across the North East — pairing
              hands-on care with modern systems.
            </p>
            <p className="mt-4 text-ink-soft">
              Our team blends decades of local knowledge with a fresh, tech-forward approach. From the first valuation to
              every renewal, our work is measured by one thing: the peace of mind we bring to the people we serve.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-ink-soft">Properties managed</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-ink-soft">Years serving Middlesbrough</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container-lux">
          <div className="max-w-2xl">
            <span className="eyebrow">Our values</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">What we stand for.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-lux p-7 hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux">
          <div className="max-w-2xl">
            <span className="eyebrow">Milestones</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">A decade of doing it properly.</h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {timeline.map((m) => (
              <div key={m.y} className="border-t border-border pt-6">
                <div className="font-display text-4xl font-bold text-accent">{m.y}</div>
                <p className="mt-3 text-ink-soft">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-lux">
          <div className="card-lux p-10 md:p-14 text-center">
            <Users className="mx-auto h-10 w-10 text-accent" />
            <h2 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-ink">Ready to work with us?</h2>
            <p className="mt-3 text-ink-soft max-w-xl mx-auto">Book a free consultation with our team and see what modern property management should feel like.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
