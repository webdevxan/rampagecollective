import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bone text-charcoal antialiased">
      <div className="mx-auto max-w-[1600px]">
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default App
