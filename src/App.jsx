import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <NavigationBar />
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
