import { useState } from 'react'
import { Mail, Phone, Globe2 } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder client-side success. If you want backend handling, tell me and I'll wire it up.
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! Our team will reach out shortly.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-red-500 to-rose-400 flex items-center justify-center shadow shadow-red-500/30">
                <Globe2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Start your next shipment</h2>
            </div>
            <p className="mt-3 text-white/70">Tell us about your lane, commodity, and timelines. We’ll craft a tailored plan and transparent quote.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Head Office</div>
                <div className="text-sm mt-1">San Francisco, CA</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Email</div>
                <div className="text-sm mt-1">hello@panorama.trade</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Phone</div>
                <div className="text-sm mt-1">+1 (202) 555‑0175</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Hours</div>
                <div className="text-sm mt-1">Mon–Fri, 8am–7pm</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/80">Company</label>
                <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Acme Inc." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Shipment Details</label>
                <textarea rows={4} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Origin, destination, commodity, volume, timelines" />
              </div>
            </div>

            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-white/90 transition">
              <Mail className="h-4 w-4" /> Send Request
            </button>

            {status && <p className="mt-3 text-sm text-white/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
