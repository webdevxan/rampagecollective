const navItems = ['Shop', 'Drops', 'About']

const collections = [
  'Core Essentials',
  'Vandal Series',
  'Global Capsule',
]

function Hero() {
  return (
    <header className="mx-auto max-w-7xl px-6 pb-10 pt-8 md:px-10">
      <nav className="flex items-center justify-between gap-6 border-b border-charcoal/15 pb-5">
        <div className="font-gothic text-3xl leading-none tracking-[0.04em] text-charcoal md:text-4xl">
          Rampage Collective
        </div>

        <div className="flex items-center gap-7 text-[10px] font-medium uppercase tracking-[0.32em] text-charcoal">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors duration-200 hover:text-muted"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="flex flex-col items-center pt-16 pb-10 text-center md:pt-20">
        <h1 className="font-gothic text-[4.5rem] leading-none tracking-[-0.04em] text-charcoal sm:text-[6rem] md:text-[8rem]">
          Rampage
        </h1>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.4em] text-muted md:text-xs">
          Worldwide Collective — Fall Drop
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center justify-center bg-charcoal px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-bone transition-colors duration-200 hover:bg-[#1d1d1b]"
        >
          Shop the drop
        </button>
      </div>

      <div className="grid gap-4 border-t border-charcoal/15 pt-5 md:grid-cols-3">
        {collections.map((item) => (
          <a
            key={item}
            href="#"
            className="flex min-h-[108px] items-center justify-center border border-charcoal/20 bg-transparent px-6 py-6 text-center text-[10px] font-medium uppercase tracking-[0.26em] text-muted transition-colors duration-200 hover:border-charcoal hover:text-charcoal"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Hero
