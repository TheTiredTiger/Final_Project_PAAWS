import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { Login, Register } from './components/Authentication'
import AdoptionForm from './components/AdoptionForm'
import AnimalCard from './components/AnimalCard'
import AdoptionCard from './components/AdoptionCard'
import SponserCard from './components/SponserCard'
import PaymentPlan from './components/PaymentPlan'

function App() {
  return (
    <>
    <NavigationBar />
    <PaymentPlan />
{/*     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter> */}
    <Footer />
  </>
  )
}

export default App
