import { Link } from "@tanstack/react-router";
import { Bed, Bath, Maximize, ArrowUpRight, MapPin } from "lucide-react";
import { formatPrice, type Property } from "@/lib/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link
      to="/properties/$id"
      params={{ id: p.id }}
      className="card-lux group block overflow-hidden hover-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          width={1200} height={900} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur ${
            p.status === "New" ? "bg-accent text-accent-foreground" :
            p.status === "Let Agreed" ? "bg-white/90 text-ink" :
            "bg-white/90 text-ink"
          }`}>{p.status}</span>
          <span className="rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
            {p.type}
          </span>
        </div>
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="flex items-center gap-1.5 text-[12px] font-medium opacity-90">
            <MapPin className="h-3.5 w-3.5" /> {p.address}, {p.city}
          </div>
          <div className="mt-1 font-display text-2xl font-bold">{formatPrice(p.price)}<span className="text-sm font-medium opacity-80"> / month</span></div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
        <div className="mt-3 flex items-center justify-between text-[13px] text-ink-soft">
          <span className="inline-flex items-center gap-1.5"><Bed className="h-4 w-4 text-accent"/> {p.bedrooms} bed</span>
          <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4 text-accent"/> {p.bathrooms} bath</span>
          <span className="inline-flex items-center gap-1.5"><Maximize className="h-4 w-4 text-accent"/> {p.area} sqft</span>
        </div>
      </div>
    </Link>
  );
}
