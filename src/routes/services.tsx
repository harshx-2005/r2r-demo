import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Building2, Users, Wrench, ClipboardCheck, Home, Store, Search, PoundSterling,
  ShieldCheck, ClipboardList, Truck, Sparkles, Calculator, PhoneCall, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Property Management, Lettings & Compliance" },
      { name: "description", content: "Full-service residential and commercial property management in Middlesbrough. Marketing, rent collection, maintenance, inspections, legal compliance and more." },
      { property: "og:title", content: "Services — Reel to Real Property Management" },
      { property: "og:description", content: "Every service a landlord or tenant needs, under one modern roof." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, t: "Residential Property Management", d: "End-to-end care for houses, flats and portfolios of every size." },
  { icon: Store, t: "Commercial Property Management", d: "Retail, office and mixed-use assets managed with precision." },
  { icon: Users, t: "Tenant Management", d: "Referencing, contracts, renewals, deposits — all handled." },
  { icon: Search, t: "Property Marketing", d: "Premium photography and syndication across every major portal." },
  { icon: PoundSterling, t: "Rent Collection", d: "Automated collection with rapid arrears management." },
  { icon: Wrench, t: "Maintenance Coordination", d: "Vetted trades, real-time updates, transparent pricing." },
  { icon: ClipboardCheck, t: "Property Inspections", d: "Scheduled inspections with full digital reports." },
  { icon: ShieldCheck, t: "Legal Compliance", d: "Gas, EICR, EPC, Right to Rent, HMO — all managed." },
  { icon: ClipboardList, t: "Tenant Screening", d: "Rigorous vetting: credit, employment, references." },
  { icon: Sparkles, t: "Inventory Management", d: "Independent inventories, check-in and check-out reports." },
  { icon: Truck, t: "Move-in & Move-out", d: "Concierge-style handovers for a seamless start and end." },
  { icon: Calculator, t: "Property Valuation", d: "Data-led rental appraisals with market intelligence." },
  { icon: Building2, t: "Investment Advice", d: "Guidance on yields, area analysis and portfolio growth." },
  { icon: PhoneCall, t: "Emergency Support", d: "24/7 support for out-of-hours emergencies." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every service a landlord or tenant needs — under one modern roof."
        subtitle="Choose a single service or the full package. Whatever you need, our team delivers with the same standard of care."
      >
        <Link to="/valuation" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/95">
          Request Free Valuation <ArrowRight className="h-4 w-4"/>
        </Link>
      </PageHero>

      <section className="py-24">
        <div className="container-lux">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="card-lux group relative overflow-hidden p-7 hover-lift animate-reveal" style={{ animationDelay: `${i * 40}ms` }}>
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-luxe">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">0{(i%9)+1}</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-muted/50">
        <div className="container-lux">
          <div className="max-w-2xl">
            <span className="eyebrow">Management packages</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">Three ways to work with us.</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Let Only", price: "8%", desc: "One-off fee. Ideal for hands-on landlords who want us to find the right tenant.", features: ["Marketing & viewings","Referencing & contracts","Deposit registration","Move-in handover"] },
              { name: "Rent Collect", price: "10%", desc: "Monthly management of your rental income and contracts.", features: ["Everything in Let Only","Monthly rent collection","Arrears management","Annual statements"], featured: true },
              { name: "Full Management", price: "12%", desc: "Total peace of mind. We handle every aspect of the tenancy.", features: ["Everything in Rent Collect","Maintenance coordination","Property inspections","Full compliance"] },
            ].map((p) => (
              <div key={p.name} className={`card-lux p-8 relative ${p.featured ? "ring-2 ring-accent shadow-luxe" : ""}`}>
                {p.featured && <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Most Popular</div>}
                <h3 className="font-display text-2xl font-bold text-ink">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-primary">{p.price}</span>
                  <span className="text-ink-soft">of monthly rent</span>
                </div>
                <p className="mt-4 text-ink-soft">{p.desc}</p>
                <ul className="mt-6 grid gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[15px] text-ink">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${p.featured ? "bg-primary text-primary-foreground hover:bg-secondary" : "border border-border bg-white text-ink hover:bg-muted"}`}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
