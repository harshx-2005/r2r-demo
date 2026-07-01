import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/landlords")({
  head: () => ({
    meta: [
      { title: "Landlord Services — Reel to Real Property Management" },
      { name: "description", content: "Premium landlord services across Middlesbrough — full management, rent collection, compliance, marketing and portfolio growth." },
      { property: "og:title", content: "Landlord Services" },
      { property: "og:description", content: "Grow and protect your portfolio with a modern property partner." },
    ],
    links: [{ rel: "canonical", href: "/landlords" }],
  }),
  component: LandlordsPage,
});

function LandlordsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Landlords"
        title="Grow and protect your portfolio, without lifting a finger."
        subtitle="Whether you own one property or one hundred, our team delivers hands-on management, market-leading marketing and fully-compliant peace of mind."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/valuation" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/95">
            Free Rental Valuation
          </Link>
          <Link to="/contact" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">
            Talk to a Specialist
          </Link>
        </div>
      </PageHero>

      <section className="py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why landlords choose us</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-ink">A better return, in every sense.</h2>
            <ul className="mt-8 grid gap-3">
              {[
                "Higher yields through smarter pricing and lower voids",
                "Dedicated property manager — one point of contact",
                "Full legal & regulatory compliance, guaranteed",
                "Rigorous tenant referencing and rent protection",
                "24/7 digital portal with real-time visibility",
                "Transparent monthly statements and reporting",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="h-3 w-3"/></span>
                  <span className="text-ink">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-lux p-8">
            <h3 className="font-display text-2xl font-bold text-ink">The Landlord Guarantee</h3>
            <p className="mt-3 text-ink-soft">Our promises to every landlord — in writing.</p>
            <div className="mt-6 grid gap-4">
              {[
                { t: "Same-day response", d: "Every enquiry acknowledged within business hours." },
                { t: "No hidden fees", d: "One transparent rate. No renewal or exit surprises." },
                { t: "Quality-vetted tenants", d: "Full referencing, credit and employment checks." },
                { t: "Insured rent option", d: "Protect against arrears with rent guarantee cover." },
              ].map((g) => (
                <div key={g.t} className="rounded-2xl border border-border p-5">
                  <div className="font-semibold text-ink">{g.t}</div>
                  <p className="text-sm text-ink-soft mt-1">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-lux">
          <div className="card-lux p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink">Ready for a straight-talking valuation?</h2>
              <p className="mt-2 text-ink-soft">Book a no-obligation appraisal — usually within 48 hours.</p>
            </div>
            <Link to="/valuation" className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
              Request Free Valuation <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
