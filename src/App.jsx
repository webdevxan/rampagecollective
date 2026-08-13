import Hero from './components/Hero'
import Footer from './components/Footer'
import { supabase } from './lib/supabase'

function App() {
  const envStatus = {
    url: Boolean(import.meta.env.VITE_SUPABASE_URL),
    anonKey: Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY),
  }

  const checkConnection = async () => {
    const { data, error } = await supabase.from('products').select('id').limit(1)

    if (error) {
      console.error('Supabase connection check failed:', error.message)
      return
    }

    console.log('Supabase connected:', data)
  }

  return (
    <div className="min-h-screen bg-bone text-charcoal antialiased">
      <div className="mx-auto max-w-[1600px]">
        <Hero />
        <Footer />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8 text-[10px] uppercase tracking-[0.2em] text-muted md:px-10">
        <p className="mb-2">Env status</p>
        <p>
          URL: {envStatus.url ? 'configured' : 'missing'} • ANON KEY:{' '}
          {envStatus.anonKey ? 'configured' : 'missing'}
        </p>
        <button
          type="button"
          onClick={checkConnection}
          className="mt-4 inline-flex items-center border border-charcoal/30 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
        >
          Check Supabase
        </button>
      </div>
    </div>
  )
}

export default App
