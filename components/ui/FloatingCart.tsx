import { useState } from 'react'
import useCart from '@/components/store/cartStore'

export default function FloatingCart(){
  const [open, setOpen] = useState(false)
  const items = useCart((s)=>s.items)
  const total = useCart((s)=>s.total)()
  const remove = useCart((s)=>s.removeItem)
  const clear = useCart((s)=>s.clear)

  async function handleCheckout(){
    try{
      const res = await fetch('/api/checkout', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({ items }) })
      const data = await res.json()
      if(data.url) window.location.href = data.url
    }catch(e){
      console.error(e)
      alert('Checkout failed')
    }
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="flex items-center space-x-3">
        <button onClick={()=>setOpen(!open)} className="bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg">
          Cart • ₹{total}
        </button>
      </div>

      {open && (
        <div className="mt-3 bg-white rounded-lg shadow-lg w-80 p-4">
          <h4 className="font-semibold">Cart</h4>
          <div className="mt-3 text-sm text-gray-600 space-y-3">
            {items.length === 0 && <div className="text-gray-400">Your cart is empty</div>}
            {items.map(it=> (
              <div key={it.id} className="flex justify-between items-center animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                    <img src={`/images/${it.id}.jpg`} alt="thumb" className="w-full h-full object-cover" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
                    <div className="text-gray-400">🍽</div>
                  </div>
                  <div>
                    <div className="font-medium">{it.name}</div>
                    <div className="text-sm text-gray-500">₹{it.price}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button onClick={()=>{ /* decrease qty */
                    if(it.qty>1){
                      // add with negative qty to reduce
                      (useCart as any).getState().addItem({ id: it.id, name: it.name, price: it.price }, -1)
                    } else {
                      remove(it.id)
                    }
                  }} className="px-2 py-1 border rounded">-</button>
                  <div className="px-2">{it.qty}</div>
                  <button onClick={()=> (useCart as any).getState().addItem({ id: it.id, name: it.name, price: it.price }, 1)} className="px-2 py-1 bg-orange-600 text-white rounded">+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-lg font-semibold">₹{total}</div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button onClick={()=>clear()} className="px-3 py-2 border rounded">Clear</button>
              <button onClick={handleCheckout} className="px-3 py-2 bg-orange-600 text-white rounded">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
