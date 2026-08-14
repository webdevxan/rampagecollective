function TrackOrderPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Delivery
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Track Your Order
        </h1>
      </div>

      <div className="space-y-12 max-w-2xl">
        <section>
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">How to Track</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Method 1: Account Dashboard</h3>
              <ol className="space-y-2 text-muted">
                <li>• Log into your Rampage Collective account</li>
                <li>• Go to "Orders" section</li>
                <li>• Find your order and click "Track"</li>
                <li>• View real-time updates from the carrier</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-charcoal mb-2">Method 2: Email Tracking Link</h3>
              <ol className="space-y-2 text-muted">
                <li>• Check the shipping confirmation email</li>
                <li>• Click the tracking link</li>
                <li>• Monitor your package with the carrier</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Order Status Guide</h2>
          <div className="space-y-4">
            {[
              { status: 'Processing', desc: 'Your order is being prepared for shipment.' },
              { status: 'Shipped', desc: "Your order is on its way. You'll receive a tracking number." },
              { status: 'In Transit', desc: 'Your package is with the carrier and heading to you.' },
              { status: 'Out for Delivery', desc: 'Your order is with the delivery driver and arriving soon.' },
              { status: 'Delivered', desc: 'Your order has been successfully delivered.' },
            ].map((item) => (
              <div key={item.status} className="border-l-4 border-charcoal bg-[#f3f0ea] p-4">
                <p className="font-semibold text-charcoal">{item.status}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">Shipping Carriers</h2>
          <p className="text-muted mb-4">We ship with trusted carriers including UPS, FedEx, and USPS.</p>
          <p className="text-muted">
            Each carrier provides full tracking information. If you encounter any issues, we're here to help.
          </p>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <p className="text-muted">
            Can't find your tracking info? <span className="font-semibold text-charcoal">Contact support@rampagecollective.com</span>
          </p>
        </section>
      </div>
    </main>
  )
}

export default TrackOrderPage
