function SupportPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Help center
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Support
        </h1>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Orders & Shipping', count: '8 articles' },
          { title: 'Returns & Exchanges', count: '6 articles' },
          { title: 'Account & Login', count: '5 articles' },
        ].map((cat) => (
          <div key={cat.title} className="border border-charcoal/15 bg-white p-6 cursor-pointer hover:bg-[#f3f0ea] transition-colors">
            <h3 className="font-sans font-semibold text-charcoal">{cat.title}</h3>
            <p className="text-sm text-muted">{cat.count}</p>
          </div>
        ))}
      </div>

      <section className="mb-16 border-t border-charcoal/15 pt-12">
        <h2 className="mb-8 font-sans text-2xl font-bold text-charcoal">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: 'How long does shipping take?',
              a: 'Most orders ship within 2-3 business days. Delivery times vary by location—typically 5-10 business days for domestic orders and 7-14 for international.',
            },
            {
              q: 'What is your return policy?',
              a: 'We accept returns within 30 days of purchase. Items must be unworn and in original packaging. Returns are free within the US.',
            },
            {
              q: 'How do I track my order?',
              a: "You'll receive a tracking number via email once your order ships. You can also track it in your account under \"Orders.\"",
            },
            {
              q: 'Do you ship internationally?',
              a: 'Yes! We ship to 50+ countries. Shipping costs and times vary by destination. International customers may be responsible for customs duties.',
            },
            {
              q: 'Can I modify or cancel my order?',
              a: 'Orders can be modified or cancelled within 1 hour of placement. After that, contact support immediately.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.',
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-charcoal/15 pb-6 last:border-b-0">
              <h3 className="mb-3 font-sans font-semibold text-charcoal hover:text-muted transition-colors cursor-pointer">
                {faq.q}
              </h3>
              <p className="text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <p className="mb-4 text-muted">Didn't find what you're looking for?</p>
        <p className="text-charcoal font-semibold">Email us at support@rampagecollective.com</p>
      </div>
    </main>
  )
}

export default SupportPage
