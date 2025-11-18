import { Menu, Ship, Globe2, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-red-500 to-rose-400 flex items-center justify-center shadow-lg shadow-red-500/30">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-lg tracking-tight">Panorama</p>
                <p className="text-xs text-white/60 -mt-0.5">Global Trade Partners</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white/80 hover:text-white transition">Solutions</a>
              <a href="#network" className="text-white/80 hover:text-white transition">Network</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+1-202-555-0175" className="inline-flex items-center gap-2 text-white/90 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (202) 555‑0175</span>
              </a>
              <a href="mailto:hello@panorama.trade" className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-white/90 px-4 py-2 rounded-lg font-semibold transition">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Get a Quote</span>
              </a>
            </div>

            <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              <a href="#services" className="block text-white/90">Solutions</a>
              <a href="#network" className="block text-white/90">Network</a>
              <a href="#contact" className="block text-white/90">Contact</a>
              <a href="mailto:hello@panorama.trade" className="mt-2 inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                <Ship className="h-4 w-4" /> Request Quote
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
