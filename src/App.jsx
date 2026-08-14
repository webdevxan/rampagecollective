import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import DropsPage from './pages/Drops'
import AboutPage from './pages/About'
import { supabase } from './lib/supabase'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Drops', href: '/drops' },
  { label: 'About', href: '/about' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const envStatus = {
    url: Boolean(import.meta.env.VITE_SUPABASE_URL),
    anonKey: Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY),
  }

  const checkConnection = async () => {
    if (!supabase) {
      console.error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Netlify.')
      return
    }

    const { data, error } = await supabase.from('products').select('id').limit(1)

    if (error) {
      console.error('Supabase connection check failed:', error.message)
      return
    }

    console.log('Supabase connected:', data)
  }

  return (
    <div className="min-h-screen bg-bone text-charcoal antialiased">
      <header className="mx-auto max-w-[1600px] px-6 pt-8 md:px-10">
        <nav className="flex items-center justify-between gap-6 border-b border-charcoal/15 pb-5">
          <NavLink to="/" className="font-gothic text-3xl leading-none tracking-[0.04em] text-charcoal md:text-4xl">
            Rampage Collective
          </NavLink>

          <div className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.32em] text-charcoal md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${isActive ? 'text-muted' : 'hover:text-muted'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-charcoal transition-all duration-200 ${
                  menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-charcoal transition-all duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-5 rounded-full bg-charcoal transition-all duration-200 ${
                  menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="border-b border-charcoal/15 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-charcoal/10 py-2 transition-colors duration-200 ${
                      isActive ? 'text-muted' : 'hover:text-muted'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/drops" element={<DropsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />

      <div className="mx-auto max-w-7xl px-6 pb-8 text-[10px] uppercase tracking-[0.2em] text-muted md:px-10">
        <p className="mb-2">Env status</p>
        <p>
          URL: {envStatus.url ? 'configured' : 'missing'} • ANON KEY:{' '}
          {envStatus.anonKey ? 'configured' : 'missing'}
        </p>
        <button
          type="button"
          onClick={checkConnection}
          className="mt-4 inline-flex items-center border border-charcoal/30 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
        >
          Check Supabase
        </button>
      </div>
    </div>
  )
}

export default App
