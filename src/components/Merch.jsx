import { useEffect, useState } from 'react'

const ACCENT = 'text-[#c8a24d]'
const ACCENT_BG = 'bg-[#c8a24d]'

export default function Merch({ onAddToCart }){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        if (res.ok){
          const data = await res.json()
          setProducts(data)
        }
      } catch(err){
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  },[])

  return (
    <section id="merch" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-white">Merch Store</h2>
          <p className={`text-sm ${ACCENT}`}>Premium apparel and gear</p>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading products...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length === 0 && (
              <div className="col-span-full text-slate-400">No products yet. Add some in the database.</div>
            )}
            {products.map(p => (
              <div key={p._id} className="bg-black border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition">
                <div className="aspect-video bg-slate-800/50">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-slate-400">No image</div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold group-hover:opacity-90">{p.title}</h3>
                  {p.description && <p className="text-slate-300 text-sm mt-1">{p.description}</p>}
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-white font-bold`}>₹{p.price}</span>
                    <button disabled={p.in_stock===false} onClick={()=>onAddToCart(p)} className={`px-3 py-1.5 rounded-md text-sm font-semibold ${p.in_stock===false? 'bg-slate-700 text-slate-400 cursor-not-allowed': ACCENT_BG + ' text-black hover:brightness-110'}`}>
                      {p.in_stock===false? 'Out of stock':'Add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
