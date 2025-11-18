import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Network from './components/Network'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Network />
      <Contact />
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Panorama. All rights reserved.</p>
          <div className="text-white/60 text-sm">
            Built for sustainable, efficient global trade.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
