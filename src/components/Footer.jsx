function Footer() {
  return (
    <footer className="border-t border-charcoal/15 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-muted md:flex-row md:gap-5">
        <span>© 2026 Rampage Collective</span>
        <span className="text-faint">A company by Dynasty100™</span>
        <div className="flex items-center gap-4 text-muted">
          <a href="#" className="transition-colors duration-200 hover:text-charcoal">
            Privacy
          </a>
          <a href="#" className="transition-colors duration-200 hover:text-charcoal">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
