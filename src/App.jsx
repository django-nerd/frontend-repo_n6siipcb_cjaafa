import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Teams from './components/Teams'
import Services from './components/Services'
import Merch from './components/Merch'
import Apply from './components/Apply'
import Cart from './components/Cart'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p._id === product._id)
      if (existing) {
        return prev.map(p => p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const handleUpdateQty = (id, qty) => {
    setCart(prev => prev.map(p => p._id === id ? { ...p, quantity: qty } : p))
  }

  const handleCheckout = async (total) => {
    // Build a minimal order payload and send to backend
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const payload = {
      customer_name: 'Guest',
      email: 'guest@example.com',
      address: 'N/A',
      items: cart.map(c => ({ product_id: c._id, title: c.title, price: c.price, quantity: c.quantity, image_url: c.image_url })),
      total_amount: cart.reduce((s, i)=> s + i.price * i.quantity, 0),
      notes: 'Cart checkout from site'
    }
    try {
      const res = await fetch(`${baseUrl}/api/orders`, { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if (res.ok) {
        setCart([])
        alert('Order placed! We\'ll contact you on email to complete payment.')
        setCartOpen(false)
      } else {
        alert('Failed to place order')
      }
    } catch (e) {
      console.error(e)
      alert('Checkout error')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar onCartOpen={()=>setCartOpen(true)} />
      <Hero />
      <Teams />
      <Services />
      <Merch onAddToCart={handleAddToCart} />
      <Apply />
      <footer className="py-12 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} Nizard Gaming. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/test" className="hover:text-white">System Status</a>
            <a href="#apply" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {cartOpen && (
        <Cart items={cart} onClose={()=>setCartOpen(false)} onUpdateQty={handleUpdateQty} onCheckout={handleCheckout} />
      )}
    </div>
  )
}

export default App
