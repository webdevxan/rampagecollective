const drops = [
  { name: 'Noir Run', date: '07.19.2026', status: 'Live now' },
  { name: 'Transit Utility', date: '08.04.2026', status: 'Coming soon' },
  { name: 'Crimson Motion', date: '09.12.2026', status: 'Members only' },
]

function DropsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Seasonal drops
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Upcoming Releases
        </h1>
      </div>

      <div className="space-y-6">
        {drops.map((drop) => (
          <article key={drop.name} className="grid gap-6 border border-charcoal/20 bg-white p-6 md:grid-cols-[1.2fr_0.8fr_0.5fr] md:items-center">
            <div className="relative h-48 overflow-hidden bg-[#e8e4df] md:h-40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_65%)]" />
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
                <span className="font-gothic text-[clamp(2rem,3.8vw,3.2rem)] leading-[0.8] tracking-[0.08em] text-charcoal/80 drop-shadow-[0_1px_0_rgba(255,255,255,0.3)]">
                  COMING<br />SOON
                </span>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-muted">{drop.date}</p>
              <h2 className="font-sans text-2xl font-semibold text-charcoal">{drop.name}</h2>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <span className="border border-charcoal/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal">
                {drop.status}
              </span>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 bg-[#f3f0ea] p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['Member access', 'Priority notifications and early previews.'],
            ['Limited quantities', 'Capsules are intentionally small and precise.'],
            ['Global shipping', 'Fast fulfillment to major cities worldwide.'],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="mb-3 font-sans text-xl font-semibold text-charcoal">{title}</h3>
              <p className="text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default DropsPage
