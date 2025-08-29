import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs.jsx'
import Footer from './components/Footer.jsx'
import ProductsServices from './pages/ProductServices.jsx'
import Circle from './components/Circle.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
  
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/products' element={<ProductsServices/>}/>
        <Route path='/career' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Circle/>
      <Footer/>
    </StrictMode>
  </BrowserRouter>,
)
