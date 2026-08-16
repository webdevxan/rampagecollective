function PressPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Media
        </p>
        <h1 className="font-gothic text-[clamp(3rem,6vw,6rem)] leading-none text-charcoal">
          Press
        </h1>
      </div>

      <section className="mb-16 grid gap-8 border-t border-charcoal/15 pt-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <h2 className="mb-3 font-sans text-2xl font-bold text-charcoal">Press Kit</h2>
          <p className="max-w-lg text-base text-muted">
            Rampage Collective is a global streetwear label rooted in utility, identity, and culture. Our press kit includes brand background, key product notes, visual assets, and editorial context for media coverage and partnership inquiries.
          </p>
        </div>

        <div className="border border-charcoal/15 bg-white p-6">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
            Brand assets
          </p>
          <h3 className="mb-3 font-sans text-2xl font-semibold text-charcoal">
            Brand Story & Media Pack
          </h3>
          <p className="mb-6 text-sm leading-6 text-muted">
            Includes logo files, campaign stills, product photography references, founder notes, and brand guidelines for editorial, campaign, and partnership use.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:press@rampagecollective.com?subject=Press%20Kit%20Request"
              className="inline-flex items-center justify-center border border-charcoal/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
            >
              Request kit
            </a>
            <a
              href="mailto:press@rampagecollective.com?subject=Press%20Inquiry"
              className="inline-flex items-center justify-center bg-charcoal px-5 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-bone transition-colors hover:bg-[#1d1d1b]"
            >
              Contact press
            </a>
          </div>
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
              blurb: 'A look at the label’s latest global capsule and how utility-driven silhouettes are reshaping the new wave of streetwear essentials.',
            },
            {
              outlet: 'SSENSE',
              title: 'The Rise of Rampage: Streetwear for the Collective Movement',
              date: 'July 2026',
              blurb: 'An editorial profile on the brand’s approach to movement, community, and the new language of elevated everyday wear.',
            },
            {
              outlet: 'Highsnobiety',
              title: 'Behind the Drop: A Conversation with Rampage Collective',
              date: 'June 2026',
              blurb: 'A conversation on design philosophy, limited-run production, and the cultural forces that inform each capsule release.',
            },
            {
              outlet: 'Vogue Business',
              title: 'The Economics of Limited-Run Fashion',
              date: 'May 2026',
              blurb: 'A feature on how small-batch production, scarcity, and authenticity are driving new brand value in the contemporary streetwear market.',
            },
          ].map((article) => (
            <article key={article.title} className="border-b border-charcoal/15 pb-6 last:border-b-0">
              <div className="mb-2 flex flex-wrap gap-4 text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
                <span>{article.outlet}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mb-2 font-sans text-xl font-semibold text-charcoal">
                {article.title}
              </h3>
              <p className="max-w-3xl text-sm leading-6 text-muted">{article.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/15 pt-12 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Press inquiries
        </p>
        <p className="text-base text-charcoal">
          <a href="mailto:press@rampagecollective.com" className="hover:text-muted">
            press@rampagecollective.com
          </a>
        </p>
      </section>
    </main>
  )
}

export default PressPage
