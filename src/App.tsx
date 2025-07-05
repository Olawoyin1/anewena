import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom"
// import Home from './pages/Home'
import Products from './pages/Products'
// import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import ProductDetails from './pages/ProductDetails'
import AboutUs from './pages/About'
import Login from './pages/Login'
import CartSidebar from './components/CartSidebar'
import ScrollToTop from './components/ScrollToTop'
import FAQ from './components/FAQ'
import { Toaster } from "sonner";
import CartPage from './pages/CartPage'

function App() {

  return (
    <>
    <CartSidebar />
    <Toaster position="top-center"   toastOptions={{
    className: "flex shadow justify-center w-fit",
  }} richColors />
    <ScrollToTop />
     <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </>
  )
}

export default App
