import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Check, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/valuation")({
  head: () => ({
    meta: [
      { title: "Free Property Valuation — Reel to Real Property Management" },
      { name: "description", content: "Request a free, no-obligation rental valuation of your Middlesbrough property. Data-led, honest and delivered within 48 hours." },
      { property: "og:title", content: "Free Property Valuation" },
      { property: "og:description", content: "Discover what your property could really earn." },
    ],
    links: [{ rel: "canonical", href: "/valuation" }],
  }),
  component: ValuationPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  address: z.string().trim().min(6, "Please enter the property address").max(160),
  type: z.enum(["House", "Apartment", "Cottage", "Penthouse", "Commercial"]),
  bedrooms: z.string(),
  notes: z.string().max(600).optional(),
});
type FormValues = z.infer<typeof schema>;

function ValuationPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: "House", bedrooms: "3" },
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Free Valuation"
        title="Discover what your property could really earn."
        subtitle="Honest, data-led rental appraisals from Middlesbrough's most responsive property team — usually within 48 hours."
      />

      <section className="py-24">
        <div className="container-lux grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: TrendingUp, t: "Data-led pricing", d: "Real-time market data across the Tees Valley." },
              { icon: Sparkles, t: "Presentation advice", d: "Simple tweaks that lift value and demand." },
              { icon: ShieldCheck, t: "No obligation", d: "A friendly conversation, not a sales pitch." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5"/>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
                  <p className="mt-1 text-ink-soft">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="card-lux p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="h-6 w-6"/>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">Thank you.</h3>
                  <p className="mt-2 text-ink-soft">Your valuation request has been received. A specialist will call you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                  <h3 className="font-display text-2xl font-bold text-ink">Request Your Valuation</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your Name" error={errors.name?.message}>
                      <input {...register("name")} className="input" placeholder="Jane Smith"/>
                    </Field>
                    <Field label="Email" error={errors.email?.message}>
                      <input type="email" {...register("email")} className="input" placeholder="jane@example.com"/>
                    </Field>
                    <Field label="Phone" error={errors.phone?.message}>
                      <input type="tel" {...register("phone")} className="input" placeholder="07…"/>
                    </Field>
                    <Field label="Property Type">
                      <select {...register("type")} className="input">
                        {["House","Apartment","Cottage","Penthouse","Commercial"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="Bedrooms">
                      <select {...register("bedrooms")} className="input">
                        {["Studio","1","2","3","4","5+"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="Property Address" error={errors.address?.message} className="sm:col-span-2">
                      <input {...register("address")} className="input" placeholder="e.g. 37 Princes Rd, Middlesbrough TS1 4BE"/>
                    </Field>
                    <Field label="Notes (optional)" className="sm:col-span-2">
                      <textarea rows={4} {...register("notes")} className="input" placeholder="Anything we should know…"/>
                    </Field>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shine mt-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground hover:bg-secondary disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting…" : "Request Free Valuation"}
                  </button>
                  <p className="text-xs text-ink-soft">By submitting you agree to our privacy policy. We'll never share your details.</p>
                </form>
              )}
            </div>
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

function Field({ label, error, className, children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
