import { useMemo } from 'react'

export default function Cart({ items, onClose, onUpdateQty, onCheckout }){
  const total = useMemo(()=> items.reduce((sum, i)=> sum + (i.price * i.quantity), 0), [items])

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-900 border-l border-white/10 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-xl">Your Cart</h3>
          <button onClick={onClose} className="text-slate-300 hover:text-white">Close</button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-400">Your cart is empty.</p>
          ) : items.map((i)=> (
            <div key={i._id} className="bg-slate-800/60 border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-slate-700 rounded overflow-hidden">
                  {i.image_url && <img src={i.image_url} alt={i.title} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold">{i.title}</div>
                  <div className="text-slate-300 text-sm">₹{i.price}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={()=>onUpdateQty(i._id, Math.max(1, i.quantity-1))} className="px-2 py-1 bg-slate-700 text-white rounded">-</button>
                    <span className="text-white">{i.quantity}</span>
                    <button onClick={()=>onUpdateQty(i._id, i.quantity+1)} className="px-2 py-1 bg-slate-700 text-white rounded">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between text-white font-semibold mb-3">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button disabled={items.length===0} onClick={()=>onCheckout(total)} className="w-full px-4 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold disabled:opacity-50">Checkout</button>
        </div>
      </div>
    </div>
  )
}
