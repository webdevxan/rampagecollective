function WhatsNewPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Journal
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          What's New
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Noir Run Release',
            date: '07.19.2026',
            category: 'Drop',
            excerpt: 'Our latest seasonal collection is live now. Limited quantities across all categories.',
          },
          {
            title: 'Global Capsule Announcement',
            date: '07.10.2026',
            category: 'Collection',
            excerpt: 'Introducing our international collaboration featuring designs from Tokyo, London, and Seoul.',
          },
          {
            title: 'Behind the Vandal Series',
            date: '06.28.2026',
            category: 'Editorial',
            excerpt: 'An in-depth look at how our Vandal Series comes together, from concept to production.',
          },
          {
            title: 'Sustainability Update',
            date: '06.15.2026',
            category: 'News',
            excerpt: "We're committed to evolving our production practices. Read about our 2026 sustainability goals.",
          },
          {
            title: 'Member Access Feature',
            date: '06.01.2026',
            category: 'Feature',
            excerpt: 'Our new member program offers early access, exclusive drops, and member-only content.',
          },
          {
            title: 'Core Essentials Deep Dive',
            date: '05.20.2026',
            category: 'Editorial',
            excerpt: 'Why the Core Essentials collection defines our brand philosophy and design approach.',
          },
        ].map((article) => (
          <article
            key={article.title}
            className="flex min-h-[340px] flex-col justify-between border border-charcoal/20 bg-white p-6 hover:bg-[#f3f0ea] transition-colors cursor-pointer"
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
                  {article.category}
                </span>
                <span className="text-[10px] text-[#888780]">{article.date}</span>
              </div>
              <h2 className="font-sans text-lg font-semibold text-charcoal hover:text-muted transition-colors">
                {article.title}
              </h2>
            </div>
            <p className="mt-4 text-muted">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default WhatsNewPage
