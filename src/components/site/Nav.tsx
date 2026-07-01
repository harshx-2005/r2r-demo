import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoR2R from "@/assets/logo-r2r.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/landlords", label: "Landlords" },
  { to: "/tenants", label: "Tenants" },
  { to: "/valuation", label: "Valuation" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(11,19,43,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-lux flex h-18 items-center justify-between py-3">
        <Link to="/" className="group flex items-center gap-3">
          <span className={`grid place-items-center rounded-xl transition-all ${scrolled ? "h-12 w-12 bg-primary/5 ring-1 ring-primary/10" : "h-12 w-12 bg-white/10 ring-1 ring-white/20 backdrop-blur"}`}>
            <img src={logoR2R} alt="Reel to Real Property Management" width={48} height={48} className="h-11 w-11 object-contain" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={`font-display text-[16px] font-bold tracking-tight ${scrolled ? "text-ink" : "text-white"}`}>Reel to Real</span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>Property Management</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`group relative px-3.5 py-2 text-[14px] font-medium transition-colors ${scrolled ? "text-ink-soft hover:text-ink data-[status=active]:text-ink" : "text-white/85 hover:text-white data-[status=active]:text-white"}`}
            >
              {l.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-accent transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+447435768555"
            className="hidden xl:inline-flex items-center gap-2 text-[13px] font-semibold text-ink-soft hover:text-ink transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> +44 7435 768555
          </a>
          <Link
            to="/valuation"
            className="btn-shine inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-luxe hover:bg-secondary transition-colors"
          >
            Free Valuation
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/70 backdrop-blur"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-lux pb-6 pt-2 bg-white/95 backdrop-blur-xl border-b border-border">
          <div className="grid gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink hover:bg-muted"
                activeProps={{ className: "bg-muted text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/valuation"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Free Valuation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
