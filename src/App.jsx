import { useState } from 'react'
import './App.css'
import Preloader from './components/preloader'
import Header from './components/header/header'
<<<<<<< HEAD
import Hero from './components/hero/hero'
import About from './components/about/about'
import Belief from './components/belief/belief'
=======
>>>>>>> 156dc0369c205c0fa75974c1b524ea759f068402

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
<<<<<<< HEAD
        <main>
          <Hero />
          <About />
          <Belief />
=======
        <main className="pt-24">
          {/* Your page content goes here */}
>>>>>>> 156dc0369c205c0fa75974c1b524ea759f068402
        </main>
      </div>
    </>
  )
}

export default App
