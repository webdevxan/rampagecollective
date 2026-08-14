function GuidelinesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Community standards
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Community Guidelines
        </h1>
      </div>

      <div className="max-w-3xl space-y-12">
        {[
          {
            title: 'Respect & Inclusion',
            points: [
              'We welcome people from all backgrounds and perspectives.',
              'Discrimination, harassment, or hate speech has no place here.',
              'Call it in respectfully. We all grow from feedback.',
            ],
          },
          {
            title: 'Creative Participation',
            points: [
              'Share your style and story with Rampage.',
              'Use our hashtags and tag us in your content.',
              'Credit collaborators and photographers in your posts.',
            ],
          },
          {
            title: 'Authenticity',
            points: [
              'Be genuine. We value real voices over polished personas.',
              'Disclose sponsorships and partnerships clearly.',
              'No fake reviews or manipulated feedback.',
            ],
          },
          {
            title: 'Accountability',
            points: [
              'If you see something that breaks these guidelines, report it.',
              'We take complaints seriously and respond within 48 hours.',
              'Repeat offenders may lose community access.',
            ],
          },
        ].map((section) => (
          <section key={section.title} className="border-b border-charcoal/15 pb-8 last:border-b-0">
            <h2 className="mb-4 font-sans text-2xl font-semibold text-charcoal">{section.title}</h2>
            <ul className="space-y-3">
              {section.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-charcoal" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-[#f3f0ea] p-8">
        <h3 className="mb-2 font-sans text-xl font-bold text-charcoal">Questions?</h3>
        <p className="text-muted">
          If you have concerns about community conduct or guidelines, reach out to community@rampagecollective.com
        </p>
      </div>
    </main>
  )
}

export default GuidelinesPage
