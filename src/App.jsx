import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import AnimalPage from './pages/AnimalPage'
import AnimalSearch from './pages/AnimalSearch'
import AdminPage from './pages/AdminPage'
import AdoptionForm from './pages/AdoptionForm'

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/animalpage" element={<AnimalPage/>} />
          <Route path="/search" element={<AnimalSearch/>} />
          <Route path="/adoptionform" element={<AdoptionForm/>} />
          <Route path="/adminpage" element={<AdminPage/>} />
        </Routes>
  </BrowserRouter>
    <Footer />
  </>
  )
}

export default App
