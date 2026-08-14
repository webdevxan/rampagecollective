function CareersPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Join us
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Careers
        </h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="h-[420px] bg-charcoal/10" />
        <div className="space-y-5 text-lg text-muted">
          <p>
            Rampage Collective is growing. We're looking for talented people to join our team across design,
            production, marketing, and operations.
          </p>
          <p>
            We believe in hiring people who are passionate about the work, culture-driven, and ready to push boundaries.
            If you're interested in building the future of contemporary streetwear, we'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="mt-16 border-t border-charcoal/15 pt-12">
        <h2 className="mb-8 font-sans text-2xl font-bold text-charcoal">Open Positions</h2>

        <div className="space-y-4">
          {[
            { role: 'Product Designer', team: 'Design', location: 'Remote' },
            { role: 'Supply Chain Manager', team: 'Operations', location: 'Global' },
            { role: 'Community Manager', team: 'Marketing', location: 'Remote' },
            { role: 'Production Specialist', team: 'Manufacturing', location: 'Regional' },
          ].map((job) => (
            <div
              key={job.role}
              className="border border-charcoal/15 bg-white p-6 hover:bg-[#f3f0ea] transition-colors"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-sans text-lg font-semibold text-charcoal">{job.role}</h3>
                  <p className="text-sm text-muted">{job.team}</p>
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">{job.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <p className="mb-4 text-muted">Have questions? Reach out to careers@rampagecollective.com</p>
      </div>
    </main>
  )
}

export default CareersPage
