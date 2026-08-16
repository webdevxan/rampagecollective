function CollectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Explore
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Collections
        </h1>
      </div>

      <div className="space-y-16">
        {[
          {
            name: 'Core Essentials',
            desc: 'The foundation of any Rampage wardrobe. Elevated basics designed for everyday motion — timeless pieces that never go out of rotation.',
            items: ['Signal Tee', 'Utility Pant', 'Overdye Crew', 'Standard Shirt'],
          },
          {
            name: 'Vandal Series',
            desc: 'Seasonal drops with bold attitude. Limited-run pieces that push silhouettes and storytelling — designed to make an impact.',
            items: ['Impact Jacket', 'Vandal Hoodie', 'Motion Vest', 'Rebel Pants'],
          },
          {
            name: 'Global Capsule',
            desc: 'Curated selections inspired by worldwide city culture. Cross-continental references meet local execution.',
            items: ['Tokyo Overshirt', 'Berlin Cargo', 'London Coach', 'Seoul Backpack'],
          },
        ].map((collection) => (
          <section key={collection.name} className="border-t border-charcoal/15 pt-12">
            <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="font-sans text-3xl font-bold text-charcoal md:text-4xl">
                  {collection.name}
                </h2>
              </div>
              <p className="text-lg text-muted">{collection.desc}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {collection.items.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[240px] flex-col justify-end border border-charcoal/20 bg-white p-6"
                >
                  <div className="relative mb-4 h-32 overflow-hidden bg-[#e8e4df]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_65%)]" />
                    <span className="absolute inset-0 flex items-center justify-center px-2 text-center font-gothic text-[clamp(1.5rem,2.2vw,2.5rem)] leading-[0.8] tracking-[0.08em] text-charcoal/80 drop-shadow-[0_1px_0_rgba(255,255,255,0.3)]">
                      COMING<br />SOON
                    </span>
                  </div>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                    {collection.name}
                  </p>
                  <h3 className="font-sans text-lg font-semibold text-charcoal">{item}</h3>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default CollectionsPage
