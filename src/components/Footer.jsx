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
    <footer className="w-full bg-[#1a1a18] px-12 pt-14 pb-6 text-bone">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div className="flex items-start">
            <h2 className="font-sans text-[34px] font-extrabold leading-[0.9] tracking-[-0.04em] text-[#e9e7e0]">
              JOIN THE
              <br />
              COLLECTIVE
            </h2>
          </div>

          {[
            { title: 'Company', links: footerLinks.company },
            { title: 'Shop', links: footerLinks.shop },
            { title: 'Community', links: footerLinks.community },
            { title: 'Help', links: footerLinks.help },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 font-sans text-[11px] font-semibold tracking-[1.5px] text-[#8a8880] uppercase">
                {group.title}
              </h3>
              <ul className="space-y-[11px]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-[13px] text-[#cfcdc6] transition-colors duration-200 hover:text-[#e9e7e0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-gothic text-[20px] leading-none text-[#e9e7e0]">
            Rampage Collective
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-full border border-[#5f5e5a] bg-transparent px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.28em] text-[#e9e7e0] transition-colors duration-200 hover:border-[#e9e7e0] hover:text-[#e9e7e0]"
            >
              JOIN THE LIST
            </button>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#e9e7e0] px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.28em] text-[#1a1a18] transition-colors duration-200 hover:bg-[#d9d7d0]"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-[18px] md:flex-row">
          <div className="flex flex-wrap items-center gap-4 font-sans text-[11px] text-[#75746e]">
            <Link to="#" className="transition-colors duration-200 hover:text-[#e9e7e0]">
              Terms of Use
            </Link>
            <span>•</span>
            <Link to="#" className="transition-colors duration-200 hover:text-[#e9e7e0]">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="#" className="transition-colors duration-200 hover:text-[#e9e7e0]">
              Cookie Settings
            </Link>
          </div>

          <p className="font-sans text-[11px] text-[#75746e]">
            A company by Dynasty100™ · Copyright {currentYear} Rampage Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
