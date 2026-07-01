import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { properties, formatPrice } from "@/lib/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { PageHero } from "@/components/site/PageHero";
import { Search } from "lucide-react";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Available Properties — Reel to Real Property Management" },
      { name: "description", content: "Browse premium rental properties across Middlesbrough and the North East. Filter by type, bedrooms and budget to find your next home." },
      { property: "og:title", content: "Available Properties in Middlesbrough" },
      { property: "og:description", content: "Curated rental listings, updated regularly." },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("All");
  const [beds, setBeds] = useState<string>("Any");
  const [sort, setSort] = useState<string>("Newest");

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      const matchesQ = q === "" || `${p.title} ${p.address} ${p.city}`.toLowerCase().includes(q.toLowerCase());
      const matchesType = type === "All" || p.type === type;
      const matchesBeds = beds === "Any" || p.bedrooms >= parseInt(beds);
      return matchesQ && matchesType && matchesBeds;
    });
    if (sort === "Price ↑") list = [...list].sort((a,b) => a.price - b.price);
    else if (sort === "Price ↓") list = [...list].sort((a,b) => b.price - a.price);
    return list;
  }, [q, type, beds, sort]);

  return (
    <>
      <PageHero
        eyebrow="Available Properties"
        title="Homes worth calling home."
        subtitle="A curated selection of rental properties across Middlesbrough and the wider Tees Valley — updated regularly by our team."
      />

      <section className="py-14">
        <div className="container-lux">
          {/* Filter bar */}
          <div className="card-lux p-4 md:p-5 flex flex-col lg:flex-row gap-3 lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by area, street or property name…"
                className="w-full rounded-xl border border-border bg-white pl-11 pr-4 py-3 text-sm focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 lg:flex lg:gap-2">
              <Select label="Type" value={type} onChange={setType} options={["All","House","Apartment","Cottage","Penthouse"]} />
              <Select label="Bedrooms" value={beds} onChange={setBeds} options={["Any","1","2","3","4"]} />
              <Select label="Sort" value={sort} onChange={setSort} options={["Newest","Price ↑","Price ↓"]} />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-ink-soft">
            <span>{filtered.length} propert{filtered.length === 1 ? "y" : "ies"} available</span>
            <span>Prices from {formatPrice(Math.min(...properties.map(p=>p.price)))} pcm</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="card-lux mt-10 p-12 text-center">
              <p className="text-ink-soft">No properties match your filters. <Link to="/contact" className="text-accent font-semibold">Register your interest</Link> and we'll notify you.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none"
      >
        {options.map((o) => <option key={o} value={o}>{label}: {o}</option>)}
      </select>
    </label>
  );
}
