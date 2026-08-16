import { describe, expect, it } from 'vitest'
import { getPageTitle } from './seo'

describe('SEO titles', () => {
  it('includes collection names in the document title', () => {
    expect(getPageTitle('/collections/core-essentials')).toBe('Core Essentials — Rampage Collective')
    expect(getPageTitle('/collections/vandal-series')).toBe('Vandal Series — Rampage Collective')
    expect(getPageTitle('/collections/global-capsule')).toBe('Global Capsule — Rampage Collective')
  })

  it('uses the global brand title on the homepage', () => {
    expect(getPageTitle('/')).toBe('Rampage Collective — Worldwide Streetwear')
  })
})
