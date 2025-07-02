import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom"
// import Home from './pages/Home'
import Products from './pages/Products'
// import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import ProductDetails from './pages/ProductDetails'
import AboutUs from './pages/About'

function App() {

  return (
    <>
     <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </>
  )
}

export default App
