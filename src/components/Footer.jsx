import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Rampage', href: '/about' },
      { label: 'Collections', href: '/collections' },
      { label: 'Drops', href: '/drops' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    shop: [
      { label: 'New Arrivals', href: '/shop' },
      { label: 'Core Essentials', href: '/shop' },
      { label: 'Vandal Series', href: '/shop' },
      { label: 'Global Capsule', href: '/shop' },
      { label: 'Sale', href: '/shop' },
    ],
    community: [
      { label: "What's New", href: '#' },
      { label: 'Lookbook', href: '#' },
      { label: 'Guidelines', href: '#' },
      { label: 'Support', href: '#' },
    ],
    help: [
      { label: 'Shipping', href: '#' },
      { label: 'Returns & Exchanges', href: '#' },
      { label: 'Track Order', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  }

  return (
    <footer className="bg-[#1a1a18] px-12 py-14">
      {/* Top Section - 5 Column Grid */}
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        {/* Column 1: Headline */}
        <div className="flex items-start">
          <h2 className="font-sans text-[34px] font-extrabold leading-tight text-bone">
            JOIN THE<br />COLLECTIVE
          </h2>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="mb-6 font-sans text-[11px] font-semibold tracking-[1.5px] text-[#8a8880] uppercase">
            Company
          </h3>
          <ul className="space-y-[11px]">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-[13px] text-[#cfcdc6] transition-colors duration-200 hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Shop */}
        <div>
          <h3 className="mb-6 font-sans text-[11px] font-semibold tracking-[1.5px] text-[#8a8880] uppercase">
            Shop
          </h3>
          <ul className="space-y-[11px]">
            {footerLinks.shop.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-[13px] text-[#cfcdc6] transition-colors duration-200 hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Community */}
        <div>
          <h3 className="mb-6 font-sans text-[11px] font-semibold tracking-[1.5px] text-[#8a8880] uppercase">
            Community
          </h3>
          <ul className="space-y-[11px]">
            {footerLinks.community.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-[13px] text-[#cfcdc6] transition-colors duration-200 hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Help */}
        <div>
          <h3 className="mb-6 font-sans text-[11px] font-semibold tracking-[1.5px] text-[#8a8880] uppercase">
            Help
          </h3>
          <ul className="space-y-[11px]">
            {footerLinks.help.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-[13px] text-[#cfcdc6] transition-colors duration-200 hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Middle Row - Wordmark + Buttons */}
      <div className="mt-24 flex items-center justify-between">
        <div className="font-gothic text-[20px] leading-none text-bone">
          Rampage Collective
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-full border border-[#5f5e5a] px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.28em] text-bone transition-colors duration-200 hover:border-bone hover:bg-[#2a2a28]"
          >
            Join the List
          </button>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full bg-bone px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.28em] text-[#1a1a18] transition-colors duration-200 hover:bg-[#d9d7d0]"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-white/15 pt-[18px] flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4 font-sans text-[11px] text-[#75746e]">
          <Link to="#" className="transition-colors duration-200 hover:text-bone">
            Terms of Use
          </Link>
          <span>•</span>
          <Link to="#" className="transition-colors duration-200 hover:text-bone">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link to="#" className="transition-colors duration-200 hover:text-bone">
            Cookie Settings
          </Link>
        </div>

        <p className="font-sans text-[11px] text-[#75746e]">
          A company by Dynasty100™ · Copyright {currentYear} Rampage Collective. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
