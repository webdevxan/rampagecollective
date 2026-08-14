function ShippingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Orders
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Shipping Information
        </h1>
      </div>

      <div className="space-y-12 max-w-3xl">
        <section>
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Shipping Methods</h2>
          <div className="space-y-4">
            {[
              {
                method: 'Standard Shipping',
                timing: '5-10 business days',
                cost: 'Free on orders over $100',
              },
              {
                method: 'Express Shipping',
                timing: '2-3 business days',
                cost: '$15',
              },
              {
                method: 'Overnight Shipping',
                timing: 'Next business day',
                cost: '$25',
              },
            ].map((option) => (
              <div key={option.method} className="border-l-4 border-charcoal bg-[#f3f0ea] p-4">
                <h3 className="font-semibold text-charcoal">{option.method}</h3>
                <p className="text-sm text-muted">{option.timing} — {option.cost}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">International Shipping</h2>
          <p className="mb-4 text-muted">
            We ship to 50+ countries worldwide. International orders typically arrive within 7-14 business days.
          </p>
          <div className="rounded-lg bg-[#fffbf5] border border-charcoal/10 p-4">
            <p className="text-sm text-charcoal font-semibold mb-2">⚠ Customs Notice</p>
            <p className="text-sm text-muted">
              International customers may be subject to customs duties and taxes. These are the responsibility of the recipient.
            </p>
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Tracking Your Order</h2>
          <p className="text-muted">
            Once your order ships, you'll receive a tracking number via email. You can monitor your package's progress in real-time using the carrier's tracking system.
          </p>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Packaging</h2>
          <p className="text-muted">
            We take pride in packaging Rampage orders with care. Each item is carefully packed to ensure it arrives in perfect condition. Our packaging uses recycled materials where possible.
          </p>
        </section>
      </div>
    </main>
  )
}

export default ShippingPage
