import { useState, useEffect } from 'react'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('rampage-cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('rampage-cookie-consent', JSON.stringify({
      analytics: true,
      marketing: true,
      essentials: true,
      timestamp: new Date().toISOString(),
    }))
    setIsVisible(false)
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('rampage-cookie-consent', JSON.stringify({
      analytics: false,
      marketing: false,
      essentials: true,
      timestamp: new Date().toISOString(),
    }))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-charcoal/15 bg-white px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-7xl">
        {showDetails ? (
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-sans text-lg font-bold text-charcoal">
                Cookie Preferences
              </h3>
              <p className="mb-6 text-sm text-muted">
                We use cookies to enhance your experience, analyze site performance, and deliver personalized content.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-charcoal/15 bg-[#f9f8f6] p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="essential"
                    checked
                    disabled
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="essential" className="block font-semibold text-charcoal">
                      Essential Cookies
                    </label>
                    <p className="text-sm text-muted">
                      Required for site functionality, security, and basic operations. Cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-charcoal/15 p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="analytics"
                    defaultChecked
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="block font-semibold text-charcoal">
                      Analytics Cookies
                    </label>
                    <p className="text-sm text-muted">
                      Help us understand how you use the site and improve performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-charcoal/15 p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    defaultChecked
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="marketing" className="block font-semibold text-charcoal">
                      Marketing Cookies
                    </label>
                    <p className="text-sm text-muted">
                      Used for retargeting ads and personalized recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="flex-1 border border-charcoal/20 bg-white px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-[#f9f8f6]"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 bg-charcoal px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-[#1d1d1b]"
              >
                Accept All
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowDetails(false)}
              className="w-full text-center text-[12px] text-muted underline hover:text-charcoal"
            >
              Back
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="mb-1 font-sans font-semibold text-charcoal">
                We use cookies to enhance your experience.
              </h3>
              <p className="text-sm text-muted">
                We use essential, analytics, and marketing cookies to provide you with the best possible experience.
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="ml-1 underline hover:text-charcoal"
                >
                  Learn more
                </button>
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="whitespace-nowrap border border-charcoal/20 bg-white px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-[#f9f8f6]"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="whitespace-nowrap bg-charcoal px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-[#1d1d1b]"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CookieConsent
