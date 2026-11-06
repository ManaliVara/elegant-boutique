import { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import NotFound from './pages/NotFound'

import {
  CartProvider,
  useCart
} from './CartContext'

import './App.css'


// SCROLL TO TOP
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return null
}


// NAVBAR
function Navbar() {
  const { cartCount, wishlistCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="brand"
        onClick={closeMenu}
      >
        THE ELEGANT BOUTIQUE
      </Link>

      <button
        className="mobile-menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

        <Link to="/" onClick={closeMenu}>Home</Link>

        <Link to="/collection" onClick={closeMenu}>
          Collection
        </Link>

        <Link to="/about" onClick={closeMenu}>About</Link>

        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <Link to="/wishlist" onClick={closeMenu}>
          Wishlist ({wishlistCount})
        </Link>

        <Link to="/cart" onClick={closeMenu}>
          Cart ({cartCount})
        </Link>

      </div>

    </nav>
  )
}


// FOOTER
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>THE ELEGANT BOUTIQUE</h2>

          <p className="footer-tagline">
            Elegance in Every Thread.
          </p>

          <p>
            Discover timeless styles and celebrate
            your unique personality with elegance.
          </p>

        </div>

        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/collection">Our Collection</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>

        </div>

        <div className="footer-links">

          <h3>YOUR ACCOUNT</h3>

          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/collection">Explore Products</Link>

        </div>

        <div className="footer-contact">

          <h3>GET IN TOUCH</h3>

          <p>
            Have a question or want to know more?
          </p>

          <Link to="/contact" className="footer-contact-btn">
            CONTACT US →
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 The Elegant Boutique.
          All rights reserved.
        </p>

        <p>Made with elegance ♡</p>

      </div>

    </footer>
  )
}


// MAIN APP
function App() {
  return (
    <CartProvider>

      <BrowserRouter>

        <ScrollToTop />

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/collection"
            element={<Collection />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </CartProvider>
  )
}

export default App