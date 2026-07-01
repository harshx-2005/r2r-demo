import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logoR2R from "@/assets/logo-r2r.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container-lux relative pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15">
                <img src={logoR2R} alt="Reel to Real Property Management" width={40} height={40} className="h-9 w-9 object-contain" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold">Reel to Real</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Property Management Ltd</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
              A premium property management company caring for landlords and tenants across
              Middlesbrough and the North East — with clarity, care, and craft.
            </p>
            <div className="mt-8 grid gap-3 text-sm">
              <a href="tel:+447435768555" className="group flex items-center gap-3 text-white/85 hover:text-white">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                +44 7435 768555
              </a>
              <a href="mailto:info@reeltorealproperty.co.uk" className="group flex items-center gap-3 text-white/85 hover:text-white">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                info@reeltorealproperty.co.uk
              </a>
              <a
                href="https://maps.app.goo.gl/xyaNAuSHe17uRdT19"
                target="_blank" rel="noreferrer"
                className="group flex items-start gap-3 text-white/85 hover:text-white"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>37 Princes Rd, Middlesbrough TS1 4BE<br/>United Kingdom</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-4">Company</div>
              <ul className="grid gap-3 text-sm">
                <li><Link to="/about" className="text-white/80 hover:text-white">About</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
                <li><Link to="/properties" className="text-white/80 hover:text-white">Properties</Link></li>
                <li><Link to="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-4">For You</div>
              <ul className="grid gap-3 text-sm">
                <li><Link to="/landlords" className="text-white/80 hover:text-white">Landlords</Link></li>
                <li><Link to="/tenants" className="text-white/80 hover:text-white">Tenants</Link></li>
                <li><Link to="/valuation" className="text-white/80 hover:text-white">Valuation</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-4">Legal</div>
              <ul className="grid gap-3 text-sm">
                <li><Link to="/privacy" className="text-white/80 hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="text-white/80 hover:text-white">Terms</Link></li>
              </ul>
              <a
                href="https://wa.me/447435768555"
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold hover:bg-white/15"
              >
                WhatsApp us <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline my-10 opacity-40" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Reel to Real Property Management Ltd. All rights reserved.</div>
          <div>Company registered in England & Wales.</div>
        </div>
      </div>
    </footer>
  );
}
