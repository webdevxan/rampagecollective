import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import DropsPage from './pages/Drops'
import AboutPage from './pages/About'
import CollectionsPage from './pages/Collections'
import CareersPage from './pages/Careers'
import PressPage from './pages/Press'
import WhatsNewPage from './pages/WhatsNew'
import LookbookPage from './pages/Lookbook'
import GuidelinesPage from './pages/Guidelines'
import SupportPage from './pages/Support'
import ShippingPage from './pages/Shipping'
import ReturnsPage from './pages/Returns'
import TrackOrderPage from './pages/TrackOrder'
import SizeGuidePage from './pages/SizeGuide'
import ContactPage from './pages/Contact'
import { supabase } from './lib/supabase'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Drops', href: '/drops' },
  { label: 'About', href: '/about' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-bone text-charcoal antialiased">
      <div className="h-12 border-b border-[#d5d0c5] bg-[#1c1b1a] px-3 text-[#f0efe9] md:h-14">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between">
          <div className="flex items-center gap-3 text-[#f0efe9]/80">
            <span className="text-xl leading-none">‹</span>
            <span className="text-xl leading-none">›</span>
            <span className="text-lg leading-none">◌</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-sm border border-[#5a5651] bg-[#262423] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f4f1ea]">
              <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-[#b3532d] text-[8px] font-bold text-[#f8efe7]">
                R
              </span>
              projectrampage.netlify.app
            </div>
            <div className="flex items-center gap-2 text-[#f0efe9]/80">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-[#6f6963] bg-[#2d2a27] text-[10px]">◍</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-[#6f6963] bg-[#2d2a27] text-[10px]">▣</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-[#6f6963] bg-[#2d2a27] text-[10px]">⚙</span>
            </div>
          </div>
        </div>
      </div>

      <header className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-center justify-between gap-6 border-b border-charcoal/20 py-8 md:py-10">
          <NavLink
            to="/"
            onClick={() => {
              if (window.location.pathname === '/') {
                scrollToTop()
              }
            }}
            className="font-gothic text-[clamp(2.7rem,4vw,5rem)] leading-[0.8] tracking-[0.04em] text-charcoal transition-colors hover:text-muted"
          >
            Rampage Collective
          </NavLink>

          <div className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.32em] text-charcoal md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => {
                  if (item.href === '/') {
                    setTimeout(scrollToTop, 0)
                  }
                }}
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
        </div>

        <div className="flex items-center justify-between gap-6 border-b border-charcoal/20 py-8 md:py-10">
          <NavLink
            to="/"
            onClick={() => {
              if (window.location.pathname === '/') {
                scrollToTop()
              }
            }}
            className="font-gothic text-[clamp(2.2rem,3.4vw,4.7rem)] leading-[0.82] tracking-[0.04em] text-charcoal transition-colors hover:text-muted"
          >
            Rampage Collective
          </NavLink>

          <div className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.32em] text-charcoal md:flex">
            {['Shop', 'Drops', 'About'].map((label) => (
              <NavLink
                key={label}
                to={label === 'Shop' ? '/shop' : label === 'Drops' ? '/drops' : '/about'}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${isActive ? 'text-muted' : 'hover:text-muted'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="border-b border-charcoal/15 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={() => {
                    setMenuOpen(false)
                    if (item.href === '/') {
                      setTimeout(scrollToTop, 0)
                    }
                  }}
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
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/whats-new" element={<WhatsNewPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
