import { Plane, Ship, Truck, ShieldCheck, FileText, Scan } from 'lucide-react'

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    desc: 'Full-container (FCL) and less-than-container (LCL) shipping with carrier selection and route optimization.'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    desc: 'Time-critical shipments with global airline partnerships and priority boarding.'
  },
  {
    icon: Truck,
    title: 'Customs & Last‑Mile',
    desc: 'Customs brokerage, import/export clearance, bonded warehousing, and final delivery.'
  },
  {
    icon: FileText,
    title: 'Compliance & Documentation',
    desc: 'Certificates of origin, HS code classification, letters of credit, and trade compliance.'
  },
  {
    icon: ShieldCheck,
    title: 'Insurance & Risk',
    desc: 'Cargo insurance, risk mitigation, and proactive exception handling.'
  },
  {
    icon: Scan,
    title: 'Visibility Platform',
    desc: 'Live tracking, milestone alerts, digital documents, and analytics dashboard.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Solutions built for global scale</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Flexible, reliable, and fully compliant logistics across ocean, air, and land — tailored to your lanes and volumes.</p>
          </div>
          <div className="hidden sm:block text-right text-white/60 text-sm">
            <p>Average customs clearance: <span className="text-white">12–24 hrs</span></p>
            <p>Carbon optimized routes: <span className="text-white">Yes</span></p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-red-500 to-rose-400 flex items-center justify-center shadow shadow-red-500/30">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
