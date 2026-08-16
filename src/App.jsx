import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import DropsPage from './pages/Drops'
import AboutPage from './pages/About'
import CollectionsPage, { CollectionDetailPage } from './pages/Collections'
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
import { getPageTitle } from './seo'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Drops', href: '/drops' },
  { label: 'About', href: '/about' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.title = getPageTitle(location.pathname)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

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
        <Route path="/terms" element={<LegalPage title="Terms of Use" intro="These Terms of Use govern your access to and use of the Rampage Collective website, storefront, editorial content, and related digital services. By visiting the site, you agree to comply with the standards set forth below and acknowledge that the experience is provided in connection with our broader brand and commerce operations." sections={[{ heading: 'Use of the site', body: ['This website is intended for lawful, personal, and non-commercial use. You may browse, review product information, and engage with brand content only in a manner consistent with applicable law and the intent of the platform.','You agree not to interfere with site integrity, bypass access controls, attempt unauthorized access to restricted areas, or misuse the platform in a way that could compromise security, performance, or user experience.'] }, { heading: 'Brand and content', body: ['All editorial copy, visual design, product imagery, logos, and original materials presented on this website are the intellectual property of Rampage Collective or its licensed partners. These elements may not be reproduced, redistributed, mirrored, or repurposed without prior written approval.','The brand experience is designed to communicate our creative direction, product identity, and commercial presence. Any unauthorized use of the content may constitute infringement and may be subject to remedial action.'] }, { heading: 'Orders, transactions and availability', body: ['Rampage Collective may update product availability, pricing, campaign timing, and delivery terms at any time without notice. Any order placed through the site is subject to confirmation and fulfillment conditions, including product stock, payment verification, and shipping eligibility.','We reserve the right to decline, cancel, or restrict any order where fraud, abuse, discrepancy, or operational risk is identified. In such cases, we may contact the customer to resolve the issue before fulfillment proceeds.'] }, { heading: 'Changes and governance', body: ['We may revise these Terms of Use from time to time to reflect product updates, legal requirements, and operational changes in how the site is managed. Continued use of the site after changes are published indicates acceptance of the revised terms.','These terms are intended to support a clear and secure customer experience. They do not limit the rights or remedies available to us under applicable law, but rather define the standards under which the site is accessed and used.'] }]} />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" intro="Rampage Collective is committed to protecting the privacy of our customers, subscribers, and visitors. This Privacy Policy explains what information we collect, how it is used, and the steps we take to safeguard it in support of a secure and reliable brand experience." sections={[{ heading: 'Information we collect', body: ['We may collect personal information such as your name, email address, billing and shipping details, and communication history when you place an order, subscribe to updates, or contact support. We may also collect technical information such as device details, browser type, and browsing activity necessary to maintain service quality and security.','In some cases, we may receive information about your preferences, purchase history, or interactions with email and promotional campaigns. This allows us to personalize communications and improve the relevance of our product and editorial offerings.'] }, { heading: 'How we use information', body: ['Information is used to fulfill orders, manage customer support requests, prevent fraud, maintain account access, and communicate relevant updates regarding products, shipping, or brand announcements. We also use data to monitor site performance, improve the shopping journey, and refine our product experience.','We do not sell personal data to third parties for marketing purposes. Information may be shared only with trusted service providers that support operations such as payments, shipping, analytics, or customer support under contractual confidentiality obligations.'] }, { heading: 'Cookies and tracking', body: ['We use cookies and similar technologies to support essential functionality, remember user preferences, and understand how visitors engage with the site. These tools help us improve navigation, measure campaign performance, and provide a more consistent product experience.','You may manage your cookie preferences at any time through the cookie settings control. Certain cookies are necessary for site functionality and cannot be disabled without affecting core features of the experience.'] }, { heading: 'Retention, protection and rights', body: ['We retain personal information only for as long as necessary to provide services, meet legal obligations, resolve disputes, and support legitimate business interests. Security controls are implemented to reduce the risk of unauthorized access, disclosure, or misuse.','You may request access to, correction of, or deletion of your personal information where applicable. You may also choose to unsubscribe from marketing communications at any time by following the instructions in our messages or by contacting the brand directly.'] }]} />} />
        <Route path="/cookies" element={<LegalPage title="Cookie Settings" intro="Cookie preferences are managed in a straightforward way so visitors can choose what information they are comfortable sharing while maintaining a secure, functional experience. Our aim is to balance personalization with transparency and user control." sections={[{ heading: 'Essential cookies', body: ['Essential cookies are required for core site functions such as navigation, session continuity, consent handling, and security-related safeguards. These cookies support the basic operation of the storefront and keep the experience reliable.','Without these cookies, you may be unable to complete transactions, access account-related functions, or retain your settings across visits.'] }, { heading: 'Analytics cookies', body: ['Analytics cookies help us understand how visitors move through the website, which product and content experiences are most relevant, and where friction may exist. This information supports better decision-making around layout, merchandising, and user experience.','Data collected through analytics is typically aggregated and used to improve the performance and utility of the site over time. It is not used to create a personal profile for unrelated commercial purposes.'] }, { heading: 'Marketing cookies', body: ['Marketing cookies may be used to evaluate the performance of campaigns, understand how customers interact with promotional content, and personalize future communications more effectively. These tools allow us to refine outreach based on general engagement patterns.','You may choose to disable marketing cookies at any time. Doing so will not prevent you from accessing the site, but it may limit the personalization or relevance of future promotions and campaign messaging.'] }, { heading: 'Managing your preference', body: ['You can revisit this settings panel at any time to update your cookie preferences. We recommend reviewing these choices periodically if your browsing habits, device usage, or privacy expectations change.','Where legally required, we will treat your preferences as an expression of consent and will apply them consistently across the site experience.'] }]} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
