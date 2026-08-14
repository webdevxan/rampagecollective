function ReturnsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Policies
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Returns & Exchanges
        </h1>
      </div>

      <div className="space-y-12 max-w-3xl">
        <section>
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Return Policy</h2>
          <p className="mb-4 text-muted">
            We want you to love your Rampage pieces. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.
          </p>
          <div className="space-y-3">
            {[
              'Items must be unworn and in original condition',
              'Original packaging and tags must be included',
              'Return shipping is free within the US',
              'Refunds are processed within 5-7 business days of receiving your return',
            ].map((item) => (
              <div key={item} className="flex gap-3 text-muted">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-charcoal" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">How to Return</h2>
          <ol className="space-y-3">
            {[
              "Log into your account and select the item to return",
              "We'll email you a prepaid return label (US only)",
              'Pack your item securely with the return label',
              'Drop off at any postal carrier location',
              "We'll confirm receipt and process your refund",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-semibold text-charcoal min-w-6">{i + 1}.</span>
                <span className="text-muted">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Exchanges</h2>
          <p className="text-muted">
            Need a different size or color? Exchanges are easy. Return your original item and we'll send your replacement at no extra shipping cost (US orders).
          </p>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">International Returns</h2>
          <p className="mb-4 text-muted">
            International customers are responsible for return shipping costs. Once we receive your return, we'll issue a refund within 7 business days.
          </p>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <p className="text-muted mb-4">Questions about returns? Contact us at returns@rampagecollective.com</p>
        </section>
      </div>
    </main>
  )
}

export default ReturnsPage
