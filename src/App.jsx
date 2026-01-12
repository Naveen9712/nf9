import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainContent from './pages/MainContent'
import ContactUs from './pages/ContactUs'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<MainContent />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="services" element={<ServicesPage />} />
      </Route>
    </Routes>
  )
}

export default App