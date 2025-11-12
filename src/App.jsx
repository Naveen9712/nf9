import { useState } from 'react'
import './App.css'
import Preloader from './components/preloader'
import Header from './components/header/header'

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
        <main className="pt-24">
          {/* Your page content goes here */}
        </main>
      </div>
    </>
  )
}

export default App
