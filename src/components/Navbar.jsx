import { useState } from 'react'
import { Menu, ShoppingCart } from 'lucide-react'

const ACCENT = 'text-[#c8a24d]'
const ACCENT_BG = 'bg-[#c8a24d]'
const ACCENT_RING = 'ring-1 ring-[#c8a24d]/30'

export default function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const LinkBtn = ({ id, children }) => (
    <button onClick={()=>scrollTo(id)} className={`uppercase tracking-wider text-sm text-slate-200 hover:${ACCENT} transition`}>{children}</button>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" onClick={(e)=>{e.preventDefault(); scrollTo('hero')}} className="flex items-center gap-3 group">
          <img src="/flame-icon.svg" alt="Nizard" className="w-9 h-9" />
          <span className={`font-extrabold text-lg text-white group-hover:${ACCENT} transition`}>Nizard Gaming</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <LinkBtn id="teams">Teams</LinkBtn>
          <LinkBtn id="services">Services</LinkBtn>
          <LinkBtn id="merch">Merch</LinkBtn>
          <LinkBtn id="apply">Apply / Hire</LinkBtn>
          <button onClick={onCartOpen} className={`relative inline-flex items-center gap-2 ${ACCENT_BG} hover:brightness-110 text-black px-3 py-1.5 rounded-md font-semibold`}
          >
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
          <button onClick={()=>scrollTo('teams')} className="block w-full text-left py-2 uppercase tracking-wider">Teams</button>
          <button onClick={()=>scrollTo('services')} className="block w-full text-left py-2 uppercase tracking-wider">Services</button>
          <button onClick={()=>scrollTo('merch')} className="block w-full text-left py-2 uppercase tracking-wider">Merch</button>
          <button onClick={()=>scrollTo('apply')} className="block w-full text-left py-2 uppercase tracking-wider">Apply / Hire</button>
          <button onClick={onCartOpen} className={`w-full ${ACCENT_BG} text-black px-3 py-2 rounded-md font-semibold`}>Open Cart</button>
        </div>
      )}
    </header>
  )
}
