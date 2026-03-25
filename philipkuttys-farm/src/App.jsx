import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Kerala from './pages/Kerala'
import Host from './pages/Host'
import Farm from './pages/Farm'
import Villas from './pages/Villas'
import Food from './pages/Food'
import Activities from './pages/Activities'
import Tips from './pages/Tips'
import Cookery from './pages/Cookery'
import Retreat from './pages/Retreat'
import Reviews from './pages/Reviews'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'
import './styles/variables.css'
import './styles/global.css'
import './styles/pages.css' 

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/kerala-backwaters" element={<Kerala />} />
        <Route path="/host" element={<Host />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/food" element={<Food />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/tips-suggestions" element={<Tips />} />
        <Route path="/cookery-holiday" element={<Cookery />} />
        <Route path="/retreat" element={<Retreat />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
