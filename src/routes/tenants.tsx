import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/tenants")({
  head: () => ({
    meta: [
      { title: "Tenant Services — Reel to Real Property Management" },
      { name: "description", content: "Rent your next home with confidence. Browse verified rental listings in Middlesbrough, request maintenance and manage your tenancy online." },
      { property: "og:title", content: "Tenant Services" },
      { property: "og:description", content: "Everything you need to rent, live and settle in with ease." },
    ],
    links: [{ rel: "canonical", href: "/tenants" }],
  }),
  component: TenantsPage,
});

const steps = [
  { n: "01", t: "Browse", d: "Explore our curated properties and shortlist your favourites." },
  { n: "02", t: "View", d: "Book a viewing online or by phone — usually within 48 hours." },
  { n: "03", t: "Apply", d: "Submit your application and references online." },
  { n: "04", t: "Move in", d: "Sign digitally, pay online and pick up your keys." },
];

function TenantsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Tenants"
        title="Renting, done the modern way."
        subtitle="Verified listings, transparent pricing and lightning-fast maintenance — because renting should feel like coming home."
      >
        <Link to="/properties" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/95">
          Browse Available Homes <ArrowRight className="h-4 w-4"/>
        </Link>
      </PageHero>

      <section className="py-24">
        <div className="container-lux">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">Four simple steps.</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="font-display text-5xl font-bold text-accent/30">{s.n}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container-lux grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">What we include</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-ink">A better rental experience.</h2>
            <ul className="mt-8 grid gap-3">
              {[
                "24/7 online maintenance requests",
                "Digital tenancy agreements",
                "Deposits protected with the DPS",
                "In-app rent payments and history",
                "Same-day response from your property manager",
                "Move-in cleaning and inventory reports",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="h-3 w-3"/></span>
                  <span className="text-ink">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-lux p-8">
            <h3 className="font-display text-2xl font-bold text-ink">Report a maintenance issue</h3>
            <p className="mt-2 text-ink-soft">Existing tenants — let us know what's up and we'll take care of it.</p>
            <form className="mt-6 grid gap-3">
              <input className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/25" placeholder="Your name"/>
              <input className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/25" placeholder="Property address"/>
              <input className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/25" placeholder="Phone"/>
              <textarea rows={4} className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/25" placeholder="Describe the issue…"/>
              <button type="button" className="btn-shine rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
