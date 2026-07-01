import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Reel to Real Property Management Ltd" },
      { name: "description", content: "Get in touch with Reel to Real Property Management in Middlesbrough. Call, email, WhatsApp or drop by our office at 37 Princes Rd." },
      { property: "og:title", content: "Contact us" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  subject: z.string().trim().min(3, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Please enter a message").max(1000),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const [ok, setOk] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const onSubmit = async (_v: FormValues) => { await new Promise(r => setTimeout(r, 600)); setOk(true); reset(); };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk property."
        subtitle="Whether you're a landlord, tenant or curious neighbour — we'd genuinely love to hear from you."
      />

      <section className="py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, t: "Our Office", d: <>37 Princes Rd,<br/>Middlesbrough TS1 4BE<br/>United Kingdom</>, cta: { href: "https://maps.app.goo.gl/xyaNAuSHe17uRdT19", label: "Open in Google Maps" } },
              { icon: Phone, t: "Phone", d: "+44 7435 768555", cta: { href: "tel:+447435768555", label: "Call now" } },
              { icon: Mail, t: "Email", d: "info@reeltorealproperty.co.uk", cta: { href: "mailto:info@reeltorealproperty.co.uk", label: "Email us" } },
              { icon: Clock, t: "Office Hours", d: <>Mon–Fri · 9:00am – 6:00pm<br/>Sat · 10:00am – 2:00pm<br/>Sun · By appointment</> },
            ].map((c) => (
              <div key={c.t} className="card-lux p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <c.icon className="h-5 w-5"/>
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-ink">{c.t}</div>
                    <div className="mt-1 text-ink-soft">{c.d}</div>
                    {c.cta && (
                      <a href={c.cta.href} target={c.cta.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                         className="mt-3 inline-block text-sm font-semibold text-accent">
                        {c.cta.label} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="card-lux p-8">
              {ok ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="h-6 w-6"/>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">Message sent.</h3>
                  <p className="mt-2 text-ink-soft">Thanks — we'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Your Name</span>
                      <input {...register("name")} className="input" placeholder="Jane Smith"/>
                      {errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name.message}</span>}
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Email</span>
                      <input type="email" {...register("email")} className="input" placeholder="jane@example.com"/>
                      {errors.email && <span className="mt-1 block text-xs text-destructive">{errors.email.message}</span>}
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Phone</span>
                      <input type="tel" {...register("phone")} className="input" placeholder="07…"/>
                      {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone.message}</span>}
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Subject</span>
                      <input {...register("subject")} className="input" placeholder="How can we help?"/>
                      {errors.subject && <span className="mt-1 block text-xs text-destructive">{errors.subject.message}</span>}
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft">Message</span>
                    <textarea rows={6} {...register("message")} className="input" placeholder="Tell us a little about your property or enquiry…"/>
                    {errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message.message}</span>}
                  </label>
                  <button type="submit" disabled={isSubmitting}
                    className="btn-shine rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground hover:bg-secondary disabled:opacity-70">
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-lux">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Reel to Real office map"
              src="https://www.google.com/maps?q=37+Princes+Rd,+Middlesbrough+TS1+4BE&output=embed"
              className="block w-full" height="460" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        .input { width: 100%; border-radius: 0.75rem; border: 1px solid var(--color-border); background: white; padding: 0.75rem 1rem; font-size: 0.875rem; outline: none; }
        .input:focus { border-color: var(--color-accent); box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 22%, transparent); }
      `}</style>
    </>
  );
}
