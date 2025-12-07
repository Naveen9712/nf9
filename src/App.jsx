import { useState } from 'react'
import './App.css'
import Preloader from './components/preloader'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import About from './components/about/about'
import IndustryFootprint from './components/industry-footprint/industry-footprint'
import VitalStats from './components/vital-stats/vital-stats'
import FAQ from './components/faq/faq'

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false)
  
  const handlePreloaderComplete = () => {
    setPreloaderComplete(true)
  }

  return (
    <>
      {!preloaderComplete && <Preloader onComplete={handlePreloaderComplete} />}

      <div style={{ opacity: preloaderComplete ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <Header />

        {/* Main content area - add your content here */}
        <main>
          <Hero />
          <About />
          <IndustryFootprint />
          <VitalStats />
          <Belief />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
