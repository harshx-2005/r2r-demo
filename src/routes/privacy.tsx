import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Reel to Real Property Management" },
      { name: "description", content: "How Reel to Real Property Management Ltd collects, uses and protects your personal data." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we collect, use and protect your information." />
      <section className="py-24"><div className="container-lux prose max-w-3xl text-ink-soft space-y-6">
        <p>Reel to Real Property Management Ltd ("we", "our", "us") is committed to protecting the privacy of visitors to our website and our clients. This policy explains what personal data we collect, how we use it, and your rights under UK GDPR.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Information we collect</h2>
        <p>We collect information you provide directly — such as your name, email, phone number and property details when you contact us, request a valuation or apply for a tenancy.</p>
        <h2 className="font-display text-2xl font-bold text-ink">How we use your information</h2>
        <p>We use your data to respond to enquiries, provide our services, meet legal and regulatory obligations, and improve our website. We do not sell your information.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Your rights</h2>
        <p>You have the right to access, correct, delete or object to our use of your personal data. To exercise these rights, contact us at info@reeltorealproperty.co.uk.</p>
      </div></section>
    </>
  ),
});
