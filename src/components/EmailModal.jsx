import { useState } from 'react'

function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setSubmitted(true)
    setEmail('')
    
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md bg-white p-8 md:p-12">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-charcoal/50 transition-colors hover:text-charcoal"
        >
          <span className="text-2xl">×</span>
        </button>

        {submitted ? (
          <div className="text-center">
            <p className="mb-4 text-4xl">✓</p>
            <h2 className="mb-2 font-sans text-xl font-semibold text-charcoal">
              Thanks for joining!
            </h2>
            <p className="text-muted">
              Check your email for exclusive updates and early access.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h2 className="mb-2 font-sans text-2xl font-bold text-charcoal">
                Join the List
              </h2>
              <p className="text-sm text-muted">
                Get first access to drops, exclusive updates, and member-only content.
              </p>
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="Enter your email"
                className="w-full border border-charcoal/20 bg-white px-4 py-3 font-sans text-charcoal placeholder-muted transition-colors focus:border-charcoal focus:outline-none"
              />
              {error && (
                <p className="mt-2 text-[12px] text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-charcoal px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-[#1d1d1b]"
            >
              Join Now
            </button>

            <p className="text-[11px] text-muted">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default EmailModal
