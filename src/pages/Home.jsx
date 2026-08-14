import Hero from '../components/Hero'

function HomePage() {
  return (
    <main className="bg-bone">
      <Hero />

      {/* Featured Products Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="mb-8 font-sans text-3xl font-bold text-charcoal md:text-4xl">
          Featured Products
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex min-h-[300px] flex-col items-center justify-center border border-charcoal/20 bg-white p-6 text-center"
            >
              <div className="mb-4 h-48 w-48 bg-charcoal/10" />
              <h3 className="mb-2 font-sans text-sm font-semibold text-charcoal">Product {i}</h3>
              <p className="text-xs text-muted">Coming soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="bg-charcoal px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 font-sans text-3xl font-bold text-bone md:text-4xl">
            Our Collections
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: 'Core Essentials', desc: 'Timeless basics for the collective' },
              { name: 'Vandal Series', desc: 'Limited edition drops with attitude' },
            ].map((collection) => (
              <div
                key={collection.name}
                className="flex min-h-[200px] flex-col items-center justify-center border border-bone/20 bg-[#1a1a18] p-8 text-center"
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

      {/* Call to Action */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-24">
        <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal md:text-3xl">
          Ready to join?
        </h2>
        <p className="mb-8 text-muted">
          Explore our latest drops and become part of the Rampage Collective.
        </p>
        <a
          href="/shop"
          className="inline-flex items-center justify-center bg-charcoal px-8 py-3 text-sm font-medium uppercase tracking-wider text-bone transition-colors duration-200 hover:bg-[#1d1d1b]"
        >
          Shop the Collection
        </a>
      </section>
    </main>
  )
}

export default HomePage
