import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-xs text-white/90">Global logistics • 150+ trade lanes • 24/7 tracking</p>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white">
              Panorama — The leading export & import partner for ambitious brands
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              We orchestrate end‑to‑end international trade: sourcing, compliance, ocean & air freight, customs clearance, and last‑mile delivery. Transparent pricing, guaranteed timelines, and a global expert team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-white/90 transition">Request a Quote</a>
              <a href="#services" className="inline-flex justify-center rounded-lg border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition">Explore Solutions</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/70">
              <div className="text-sm"><span className="text-white font-semibold">98.4%</span> on‑time deliveries</div>
              <div className="text-sm"><span className="text-white font-semibold">45+</span> countries covered</div>
              <div className="text-sm"><span className="text-white font-semibold">1M+</span> tons shipped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
