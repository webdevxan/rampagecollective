import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <main className="bg-bone">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
              New arrivals
            </p>
            <h2 className="font-sans text-3xl font-bold text-charcoal md:text-4xl">
              Featured Products
            </h2>
          </div>
          <Link to="/shop" className="text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal hover:text-muted">
            View all
          </Link>
        </div>

        <div className="featured-products-grid grid md:grid-cols-3 md:gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="featured-product-card flex min-h-[220px] flex-col justify-between border border-charcoal/20 bg-white md:min-h-[330px] md:p-6"
            >
              <div className="featured-product-visual relative w-full overflow-hidden bg-[#e8e4df] md:mb-5 md:h-52">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_65%)]" />
                <span className="coming-soon-placeholder absolute inset-0 flex items-center justify-center px-3 text-center font-gothic text-charcoal/80 drop-shadow-[0_1px_0_rgba(255,255,255,0.3)]">
                  COMING<br />SOON
                </span>
              </div>
              <div className="featured-product-copy">
                <p className="featured-product-label mb-2 font-medium uppercase tracking-[0.3em] text-muted">
                  Drop 01 / {i}
                </p>
                <h3 className="featured-product-name mb-2 font-sans font-semibold text-charcoal">Product {i}</h3>
                <p className="featured-product-price text-muted">From $120</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#8a8880]">
                Curated edits
              </p>
              <h2 className="font-sans text-3xl font-bold text-bone md:text-4xl">
                Our Collections
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { name: 'Core Essentials', desc: 'Timeless basics for everyday motion.' },
              { name: 'Vandal Series', desc: 'Limited editions with loud character.' },
              { name: 'Global Capsule', desc: 'International silhouettes and textures.' },
              { name: 'Sale', desc: 'Last chance pieces from the archive.' },
            ].map((collection) => (
              <div
                key={collection.name}
                className="flex min-h-[220px] flex-col justify-end border border-bone/20 bg-[#1a1a18] p-6"
              >
                <h3 className="mb-2 font-sans text-lg font-semibold text-bone">
                  {collection.name}
                </h3>
                <p className="text-sm text-[#cfcdc6]">{collection.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
              About the brand
            </p>
            <h2 className="font-sans text-3xl font-bold text-charcoal md:text-5xl">
              Built for motion, culture, and the next release.
            </h2>
          </div>

          <div className="space-y-6 text-base text-muted">
            <p>
              Rampage Collective exists at the intersection of utility, identity, and streetwear culture.
              We design elevated essentials for people who move through city life with purpose.
            </p>
            <p>
              Each capsule balances performance detail, premium materials, and a global point of view shaped
              by everyday scenes, travel, and creative communities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/15 bg-[#f3f0ea] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
                Journal
              </p>
              <h2 className="font-sans text-3xl font-bold text-charcoal md:text-4xl">
                What&apos;s New
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Road tested layers', meta: 'Essentials / 04' },
              { title: 'The city uniform', meta: 'Lookbook / 06' },
              { title: 'Behind the latest drop', meta: 'Culture / 08' },
            ].map((story) => (
              <article key={story.title} className="border border-charcoal/15 bg-white p-6">
                <div className="mb-6 h-48 bg-charcoal/10" />
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                  {story.meta}
                </p>
                <h3 className="font-sans text-xl font-semibold text-charcoal">{story.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-24">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Join the list
        </p>
        <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal md:text-4xl">
          Ready to join the collective?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted">
          Receive first access to launches, styling notes, and limited capsule updates.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center bg-charcoal px-8 py-3 text-sm font-medium uppercase tracking-[0.22em] text-bone transition-colors duration-200 hover:bg-[#1d1d1b]"
        >
          Shop the collection
        </Link>
      </section>
    </main>
  )
}

export default HomePage
