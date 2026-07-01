import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Reel to Real Property Management" },
      { name: "description", content: "Answers to common questions from landlords and tenants about property management, fees, deposits and maintenance." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How much does full property management cost?", a: "Our full management service starts from 12% of monthly rent. This includes marketing, tenant sourcing, rent collection, maintenance coordination and full compliance." },
  { q: "How quickly can you let my property?", a: "Most properties let within 14–21 days thanks to our marketing across every major UK portal, plus a database of pre-qualified tenants." },
  { q: "Do you handle deposits?", a: "Yes — all deposits are registered with the DPS (Deposit Protection Service) within legal timeframes." },
  { q: "What areas do you cover?", a: "We cover Middlesbrough, Stockton, Yarm, Ingleby Barwick and the wider Tees Valley." },
  { q: "How do you vet tenants?", a: "Full referencing including credit checks, employment verification, previous landlord references and Right to Rent checks." },
  { q: "Can I still be involved in decisions?", a: "Absolutely. You can be as hands-on or hands-off as you like — our portal keeps you informed at every step." },
  { q: "What happens if a tenant stops paying rent?", a: "We manage arrears proactively. Optional rent protection insurance is available to fully guarantee your income." },
  { q: "How do tenants report maintenance issues?", a: "Through our 24/7 online portal, WhatsApp, or the emergency line for out-of-hours issues." },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you wanted to ask."
        subtitle="Straight answers to the questions we hear most often. Can't find yours? Just ask."
      />

      <section className="py-24">
        <div className="container-lux max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-lux px-6 border-none">
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
