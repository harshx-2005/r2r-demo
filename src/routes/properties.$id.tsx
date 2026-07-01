import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProperty, formatPrice, properties } from "@/lib/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Bed, Bath, Maximize, MapPin, Check, ArrowLeft, Phone } from "lucide-react";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const p = getProperty(params.id);
    if (!p) throw notFound();
    return { property: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.property.title} — ${loaderData.property.city} | Reel to Real` },
      { name: "description", content: loaderData.property.description },
      { property: "og:title", content: loaderData.property.title },
      { property: "og:description", content: loaderData.property.description },
      { property: "og:image", content: loaderData.property.image },
      { property: "og:type", content: "article" },
    ] : [],
    links: loaderData ? [{ rel: "canonical", href: `/properties/${loaderData.property.id}` }] : [],
  }),
  component: PropertyDetail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Property not found</h1>
        <Link to="/properties" className="mt-4 inline-block text-accent">Back to listings</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="container-lux py-32">Error: {error.message}</div>,
});

function PropertyDetail() {
  const { property: p } = Route.useLoaderData();
  const related = properties.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      {/* Gallery */}
      <section className="pt-24">
        <div className="container-lux">
          <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink">
            <ArrowLeft className="h-4 w-4"/> Back to properties
          </Link>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden rounded-3xl">
              <img src={p.image} alt={p.title} width={1600} height={1000} className="h-full w-full object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{p.status}</span>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="relative overflow-hidden rounded-3xl">
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-lux grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <header>
              <span className="eyebrow">{p.type}</span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">{p.title}</h1>
              <div className="mt-3 inline-flex items-center gap-2 text-ink-soft"><MapPin className="h-4 w-4 text-accent"/> {p.address}, {p.city}</div>
              <div className="mt-6 flex flex-wrap gap-4 border-y border-border py-5">
                <Fact icon={Bed} v={`${p.bedrooms} Bedrooms`} />
                <Fact icon={Bath} v={`${p.bathrooms} Bathrooms`} />
                <Fact icon={Maximize} v={`${p.area} sqft`} />
              </div>
            </header>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Description</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.description}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-3 rounded-xl bg-muted/60 p-4">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3 w-3"/>
                    </span>
                    <span className="text-[15px] text-ink">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Location</h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Property location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(p.address + ", " + p.city + ", UK")}&output=embed`}
                  className="block w-full" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Enquiry sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="card-lux p-7">
              <div className="text-sm text-ink-soft">Rental price</div>
              <div className="mt-1 font-display text-4xl font-bold text-primary">{formatPrice(p.price)}<span className="text-base font-medium text-ink-soft"> / month</span></div>

              <form className="mt-6 grid gap-3">
                <input className="rounded-xl border border-border px-4 py-3 text-sm focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none" placeholder="Your name" />
                <input type="email" className="rounded-xl border border-border px-4 py-3 text-sm focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none" placeholder="Email address" />
                <input type="tel" className="rounded-xl border border-border px-4 py-3 text-sm focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none" placeholder="Phone number" />
                <textarea rows={4} className="rounded-xl border border-border px-4 py-3 text-sm focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none" placeholder={`I'd like to arrange a viewing at ${p.title}…`} />
                <button type="button" className="btn-shine rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
                  Request a Viewing
                </button>
              </form>

              <div className="hairline my-6" />
              <a href="tel:+447435768555" className="flex items-center gap-3 text-sm font-semibold text-ink hover:text-accent">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent"><Phone className="h-4 w-4"/></span>
                +44 7435 768555
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-lux">
          <h2 className="font-display text-3xl font-bold text-ink">You might also like</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <PropertyCard key={r.id} p={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ icon: Icon, v }: { icon: any; v: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-muted/70 px-4 py-2 text-sm font-semibold text-ink">
      <Icon className="h-4 w-4 text-accent" /> {v}
    </span>
  );
}
