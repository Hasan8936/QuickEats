import React from 'react'
import useCart from '@/components/store/cartStore'

const SAMPLE = [
  { id: 'r1', name: 'Samosa House', cuisine: 'Snacks', eta: '25-35 min', rating: 4.4, price: 120 },
  { id: 'r2', name: 'Biryani Express', cuisine: 'Biryani', eta: '30-40 min', rating: 4.6, price: 220 },
  { id: 'r3', name: 'Paneer Palace', cuisine: 'North Indian', eta: '20-30 min', rating: 4.3, price: 180 },
  { id: 'r4', name: 'Masala Dosa', cuisine: 'South Indian', eta: '18-28 min', rating: 4.5, price: 150 },
]

export default function RestaurantGrid(){
  const addItem = useCart((s)=>s.addItem)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SAMPLE.map(r=> (
        <div key={r.id} className="bg-white rounded-lg shadow p-4 flex space-x-4">
          <div className="w-28 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
            {/* use logo placeholder instead of external images */}
            <img src="/logo.svg" alt={r.name} className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold">{r.name}</h4>
              <div className="text-sm text-gray-500">{r.rating} ★</div>
            </div>
            <div className="text-sm text-gray-500">{r.cuisine} • {r.eta}</div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-orange-600 font-semibold">₹{r.price}</div>
              <button onClick={()=> addItem({ id: r.id, name: r.name, price: r.price })} className="px-3 py-1 bg-orange-600 text-white rounded-md">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
