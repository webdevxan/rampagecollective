function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Get in touch
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Contact Us
        </h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="mb-6 font-sans text-2xl font-bold text-charcoal">How We Can Help</h2>
          <div className="space-y-4">
            {[
              {
                heading: 'Orders & Shipping',
                email: 'orders@rampagecollective.com',
                response: 'Typically 24 hours',
              },
              {
                heading: 'Returns & Exchanges',
                email: 'returns@rampagecollective.com',
                response: 'Typically 48 hours',
              },
              {
                heading: 'General Inquiries',
                email: 'hello@rampagecollective.com',
                response: 'Typically 48 hours',
              },
              {
                heading: 'Press & Media',
                email: 'press@rampagecollective.com',
                response: 'Typically 3-5 days',
              },
              {
                heading: 'Careers',
                email: 'careers@rampagecollective.com',
                response: 'Varies by role',
              },
              {
                heading: 'Partnerships',
                email: 'business@rampagecollective.com',
                response: 'Typically 5 business days',
              },
            ].map((contact) => (
              <div key={contact.heading} className="border border-charcoal/15 bg-white p-4">
                <h3 className="font-semibold text-charcoal mb-2">{contact.heading}</h3>
                <p className="text-sm text-muted mb-1">{contact.email}</p>
                <p className="text-[10px] text-[#888780]">Response time: {contact.response}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="mb-6 font-sans text-2xl font-bold text-charcoal">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-muted focus:outline-none focus:border-charcoal"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-muted focus:outline-none focus:border-charcoal"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-muted focus:outline-none focus:border-charcoal"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder-muted focus:outline-none focus:border-charcoal"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal px-6 py-3 font-sans text-sm font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-[#1d1d1b]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="border-t border-charcoal/15 pt-8">
            <h3 className="mb-4 font-semibold text-charcoal">Response Time</h3>
            <p className="text-muted">
              We aim to respond to all inquiries within the timeframe listed above. During peak periods, response times may take slightly longer.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ContactPage
