import { Globe2, MapPin, ArrowRight } from 'lucide-react'

const regions = [
  { name: 'North America', hubs: ['Los Angeles', 'Oakland', 'New York', 'Vancouver'] },
  { name: 'Europe', hubs: ['Rotterdam', 'Antwerp', 'Hamburg', 'Barcelona'] },
  { name: 'Asia-Pacific', hubs: ['Shanghai', 'Shenzhen', 'Singapore', 'Busan'] },
  { name: 'Middle East', hubs: ['Jebel Ali', 'Dammam', 'Doha'] },
  { name: 'Africa', hubs: ['Durban', 'Mombasa', 'Lagos'] },
  { name: 'Latin America', hubs: ['Santos', 'Manzanillo', 'Callao'] },
]

export default function Network() {
  return (
    <section id="network" className="relative py-24 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-red-500 to-rose-400 flex items-center justify-center shadow shadow-red-500/30">
            <Globe2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A trusted global presence</h2>
        </div>
        <p className="mt-3 text-white/70 max-w-2xl">Strategic partners and owned offices across major ports and airports. Local expertise with global standards.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{r.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.hubs.map((h) => (
                  <span key={h} className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-md">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="group mt-10 inline-flex items-center gap-2 text-white/80 hover:text-white">
          Talk to a regional expert
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
