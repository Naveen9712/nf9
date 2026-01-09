import { useState } from 'react'
import Preloader from '../components/preloader'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Outlet } from 'react-router-dom'

function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false)

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true)
  }

  return (
    <>
      {!preloaderComplete && <Preloader onComplete={handlePreloaderComplete} />}

      <div style={{ opacity: preloaderComplete ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
