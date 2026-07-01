import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Reel to Real Property Management" },
      { name: "description", content: "Terms and conditions governing use of the Reel to Real Property Management Ltd website and services." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="The terms that govern use of our website and services." />
      <section className="py-24"><div className="container-lux max-w-3xl text-ink-soft space-y-6">
        <p>By accessing this website you agree to be bound by these terms. Our services are provided in accordance with UK law and industry regulation, including membership of relevant redress schemes.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Use of the site</h2>
        <p>All content on this website is for general information only. Property availability, pricing and features may change without notice.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Intellectual property</h2>
        <p>All branding, imagery and text on this site are the property of Reel to Real Property Management Ltd and may not be reproduced without permission.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
        <p>For any questions about these terms, please email info@reeltorealproperty.co.uk.</p>
      </div></section>
    </>
  ),
});
