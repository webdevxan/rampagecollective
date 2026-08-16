const brandName = 'Rampage Collective'

const routeTitles = {
  '/': 'Rampage Collective — Worldwide Streetwear',
  '/shop': 'Shop — Rampage Collective',
  '/drops': 'Drops — Rampage Collective',
  '/about': 'About — Rampage Collective',
  '/collections': 'Collections — Rampage Collective',
  '/careers': 'Careers — Rampage Collective',
  '/press': 'Press — Rampage Collective',
  '/whats-new': 'What\'s New — Rampage Collective',
  '/lookbook': 'Lookbook — Rampage Collective',
  '/guidelines': 'Guidelines — Rampage Collective',
  '/support': 'Support — Rampage Collective',
  '/shipping': 'Shipping — Rampage Collective',
  '/returns': 'Returns — Rampage Collective',
  '/track-order': 'Track Order — Rampage Collective',
  '/size-guide': 'Size Guide — Rampage Collective',
  '/contact': 'Contact — Rampage Collective',
  '/terms': 'Terms of Use — Rampage Collective',
  '/privacy': 'Privacy Policy — Rampage Collective',
  '/cookies': 'Cookie Settings — Rampage Collective',
}

const collectionTitles = {
  'core-essentials': 'Core Essentials',
  'vandal-series': 'Vandal Series',
  'global-capsule': 'Global Capsule',
}

export function getPageTitle(pathname = '/') {
  const normalizedPath = pathname.split('?')[0].split('#')[0] || '/'

  if (routeTitles[normalizedPath]) {
    return routeTitles[normalizedPath]
  }

  const collectionKey = normalizedPath.replace(/^\/collections\//, '').split('/')[0]
  if (collectionKey && collectionTitles[collectionKey]) {
    return `${collectionTitles[collectionKey]} — ${brandName}`
  }

  const lastSegment = normalizedPath.split('/').filter(Boolean).pop()
  if (!lastSegment) {
    return routeTitles['/']
  }

  return `${lastSegment.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')} — ${brandName}`
}
