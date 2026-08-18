import fs from 'node:fs'
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

describe('SEO assets', () => {
  it('uses a self-hosted local font and serves static SEO files', () => {
    const css = fs.readFileSync(new URL('./index.css', import.meta.url), 'utf8')
    expect(css).toContain('@font-face')
    expect(css).toContain('/fonts/')
    expect(css).not.toContain('fonts.googleapis.com')
    expect(css).not.toContain('fonts.gstatic.com')

    expect(fs.existsSync(new URL('../public/robots.txt', import.meta.url))).toBe(true)
    expect(fs.existsSync(new URL('../public/llms.txt', import.meta.url))).toBe(true)
  })
})
