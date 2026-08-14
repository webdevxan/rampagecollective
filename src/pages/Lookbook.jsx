function LookbookPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Visual stories
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Lookbook
        </h1>
      </div>

      <div className="space-y-16">
        {[
          {
            title: 'Noir Run',
            season: 'Fall 2026',
            desc: 'A study in contrast. Minimal tones, maximum impact. The Noir Run collection explores the tension between simplicity and statement through elevated monochromatic styling.',
          },
          {
            title: 'Global Motion',
            season: 'Summer 2026',
            desc: 'Inspired by movement across continents. Each look celebrates the way Rampage pieces function in real-world scenarios—cities, streets, and everyday motion.',
          },
          {
            title: 'Vandal Archive',
            season: 'Spring 2026',
            desc: 'A retrospective of our most iconic pieces. This lookbook showcases the evolution of Rampage through our most talked-about drops and limited releases.',
          },
        ].map((lookbook) => (
          <section key={lookbook.title} className="border-t border-charcoal/15 pt-12">
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">{lookbook.season}</p>
              <h2 className="font-sans text-3xl font-bold text-charcoal md:text-4xl">{lookbook.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted">{lookbook.desc}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex min-h-[400px] flex-col justify-end border border-charcoal/20 bg-white p-6"
                >
                  <div className="h-80 bg-charcoal/10 mb-4" />
                  <p className="font-sans font-semibold text-charcoal">Look {i}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default LookbookPage
