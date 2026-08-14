function PressPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Media
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Press
        </h1>
      </div>

      <section className="mb-16 grid gap-8 border-t border-charcoal/15 pt-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="mb-3 font-sans text-2xl font-bold text-charcoal">Press Kit</h2>
          <p className="text-muted">Download our complete brand assets, high-res imagery, and brand guidelines.</p>
        </div>
        <div className="border border-charcoal/15 bg-white p-6 hover:bg-[#f3f0ea] transition-colors cursor-pointer">
          <p className="font-sans font-semibold text-charcoal">Brand Assets & Media Kit</p>
          <p className="text-sm text-muted">Logos, photography, brand story, and guidelines</p>
        </div>
      </section>

      <section className="mb-16 border-t border-charcoal/15 pt-12">
        <h2 className="mb-8 font-sans text-2xl font-bold text-charcoal">Recent Coverage</h2>

        <div className="space-y-6">
          {[
            {
              outlet: 'HYPEBEAST',
              title: 'Rampage Collective Launches Global Capsule Collection',
              date: 'August 2026',
            },
            {
              outlet: 'SSENSE',
              title: 'The Rise of Rampage: Streetwear for the Collective Movement',
              date: 'July 2026',
            },
            {
              outlet: 'Highsnobiety',
              title: 'Behind the Drop: A Conversation with Rampage Collective',
              date: 'June 2026',
            },
            {
              outlet: 'Vogue Business',
              title: 'The Economics of Limited-Run Fashion',
              date: 'May 2026',
            },
          ].map((article) => (
            <article key={article.title} className="border-b border-charcoal/15 pb-6 last:border-b-0">
              <div className="mb-2 flex gap-4 text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
                <span>{article.outlet}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="font-sans text-lg font-semibold text-charcoal hover:text-muted transition-colors cursor-pointer">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="text-center">
        <p className="mb-4 text-muted">For press inquiries, contact: press@rampagecollective.com</p>
      </section>
    </main>
  )
}

export default PressPage
