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
import LegalPage from './pages/LegalPage'
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
      <header className="mx-auto max-w-[1600px] px-6 md:px-10">
        <nav className="flex items-center justify-between gap-6 border-b border-charcoal/15 py-8 md:py-10">
          <NavLink
            to="/"
            onClick={() => {
              if (window.location.pathname === '/') {
                scrollToTop()
              }
            }}
            className="font-gothic text-[clamp(2.8rem,4vw,5rem)] leading-[0.8] tracking-[0.04em] text-charcoal transition-colors hover:text-muted"
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
        </nav>

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
        <Route path="/terms" element={<LegalPage title="Terms of Use" intro="These terms govern how the Rampage Collective experience is used, accessed, and engaged with across our digital space." sections={[{ heading: 'Use of the site', body: ['This site is for lawful, personal, and non-commercial use. You agree not to disrupt, interfere with, or attempt to access restricted areas of the platform or its systems.'] }, { heading: 'Brand and content', body: ['All visuals, copy, layouts, product imagery, and brand assets remain the property of Rampage Collective. They may not be copied, redistributed, or repurposed without permission.'] }, { heading: 'Updates and continuity', body: ['We may revise these terms as the brand evolves. Continued use of the site after updates indicates acceptance of those changes.'] }]} />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" intro="We keep the experience clean, intentional, and useful — collecting only the information needed to run the shop, support customers, and refine what matters." sections={[{ heading: 'What we collect', body: ['We may collect your contact information, order details, support communication, and browsing data required to operate the website and deliver relevant service.'] }, { heading: 'How it is used', body: ['This information is used to fulfill orders, maintain account access, improve the experience, and communicate updates tied to your purchase or interest in the brand.'] }, { heading: 'Cookies and preferences', body: ['We use cookies to support core functionality, understand site performance, and remember the choices you make while browsing. You can manage those preferences at any time.'] }]} />} />
        <Route path="/cookies" element={<LegalPage title="Cookie Settings" intro="Consent is simple: choose the level of personalization and analytics you want while keeping the experience stable and secure." sections={[{ heading: 'Essential cookies', body: ['These keep the site functioning as intended — security, session continuity, and preference handling all rely on them.'] }, { heading: 'Analytics cookies', body: ['These help us understand how visitors move through the platform so we can improve performance, clarity, and product discovery.'] }, { heading: 'Marketing cookies', body: ['These support relevant campaign measurement and may help personalize future offers and brand communications.'] }]} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
