import { Link } from 'react-router-dom'

function LegalPage({ title, intro, sections }) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-charcoal md:px-10 md:py-20">
      <div className="mb-10 border-b border-charcoal/15 pb-6">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Rampage Collective
        </p>
        <h1 className="font-gothic text-[clamp(3rem,5vw,6rem)] leading-none text-charcoal">
          {title}
        </h1>
      </div>

      <div className="space-y-8 text-base leading-7 text-muted">
        {intro && <p className="max-w-3xl text-lg leading-8 text-charcoal/80">{intro}</p>}

        {sections.map((section) => (
          <section key={section.heading} className="max-w-3xl">
            <h2 className="mb-3 font-sans text-xl font-semibold text-charcoal">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mb-4">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center border border-charcoal/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LegalPage
