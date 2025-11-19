import { useState } from 'react'
import { Menu, ShoppingCart } from 'lucide-react'

export default function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" onClick={(e)=>{e.preventDefault(); scrollTo('hero')}} className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Nizard" className="w-8 h-8" />
          <span className="text-white font-bold text-lg tracking-tight">Nizard Gaming</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-200">
          <button onClick={()=>scrollTo('teams')} className="hover:text-white">Teams</button>
          <button onClick={()=>scrollTo('services')} className="hover:text-white">Services</button>
          <button onClick={()=>scrollTo('merch')} className="hover:text-white">Merch</button>
          <button onClick={()=>scrollTo('apply')} className="hover:text-white">Apply / Hire</button>
          <button onClick={onCartOpen} className="relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md">
            <ShoppingCart size={18} />
            <span>Cart</span>
          </button>
        </nav>
        <button className="md:hidden text-white" onClick={()=>setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-slate-200">
          <button onClick={()=>scrollTo('teams')} className="block w-full text-left py-2">Teams</button>
          <button onClick={()=>scrollTo('services')} className="block w-full text-left py-2">Services</button>
          <button onClick={()=>scrollTo('merch')} className="block w-full text-left py-2">Merch</button>
          <button onClick={()=>scrollTo('apply')} className="block w-full text-left py-2">Apply / Hire</button>
          <button onClick={onCartOpen} className="w-full bg-blue-600 text-white px-3 py-2 rounded-md">Open Cart</button>
        </div>
      )}
    </header>
  )
}
