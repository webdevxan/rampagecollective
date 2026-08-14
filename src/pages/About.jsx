const values = [
  {
    title: 'Crafted for movement',
    text: 'Every silhouette is designed with function, fit, and wearability in mind.',
  },
  {
    title: 'Global influence',
    text: 'Our references come from city life, travel, sport, and music across continents.',
  },
  {
    title: 'Small-batch perspective',
    text: 'We build limited runs to keep each release intentional, elevated, and exclusive.',
  },
]

function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          About us
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Fearless essentials for the everyday crew.
        </h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="h-[420px] bg-charcoal/10" />
        <div className="space-y-5 text-lg text-muted">
          <p>
            Rampage Collective is a streetwear label shaped by energy, discipline, and lasting impact.
            Our goal is to make wardrobe staples that feel as strong in motion as they do in conversation.
          </p>
          <p>
            We pair utility-driven construction with elevated finishes and a culture-first mindset, creating
            pieces meant to live through everyday routines and selective moments alike.
          </p>
        </div>
      </div>

      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="border border-charcoal/20 bg-white p-7">
            <h2 className="mb-3 font-sans text-2xl font-semibold text-charcoal">{value.title}</h2>
            <p className="text-muted">{value.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default AboutPage
