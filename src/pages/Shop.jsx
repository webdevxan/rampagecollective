import { Link } from 'react-router-dom'

const products = [
  { name: 'Signal Tee', price: '$68', tone: 'Core Essentials' },
  { name: 'Drift Overshirt', price: '$142', tone: 'Global Capsule' },
  { name: 'Vandal Hoodie', price: '$164', tone: 'Vandal Series' },
  { name: 'Utility Pant', price: '$138', tone: 'Core Essentials' },
  { name: 'Impact Shell', price: '$188', tone: 'New Arrivals' },
  { name: 'Monarch Crew', price: '$118', tone: 'Sale' },
]

function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-10">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Shop all
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          The Collection
        </h1>
      </div>

      <div className="mb-10 flex flex-wrap gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
        {['All', 'New Arrivals', 'Essentials', 'Outerwear', 'Accessories', 'Sale'].map((filter) => (
          <button
            key={filter}
            type="button"
            className="border border-charcoal/15 bg-white px-4 py-3 transition-colors hover:border-charcoal hover:text-charcoal"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="border border-charcoal/20 bg-white p-5">
            <div className="mb-4 h-72 bg-charcoal/10" />
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
                {product.tone}
              </p>
              <span className="font-sans text-lg font-semibold text-charcoal">{product.price}</span>
            </div>
            <h2 className="font-sans text-xl font-semibold text-charcoal">{product.name}</h2>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] bg-charcoal px-8 py-12 text-bone md:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#8a8880]">
              Built for motion
            </p>
            <h2 className="font-sans text-3xl font-bold">Need a capsule edit?</h2>
          </div>
          <Link to="/drops" className="inline-flex items-center justify-center border border-bone/30 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-bone transition-colors hover:bg-bone hover:text-charcoal">
            Explore drops
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
