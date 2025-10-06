import { useState } from 'react'

export default function FloatingCart(){
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="flex items-center space-x-3">
        <button onClick={()=>setOpen(!open)} className="bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg">
          Cart • ₹520
        </button>
      </div>

      {open && (
        <div className="mt-3 bg-white rounded-lg shadow-lg w-80 p-4">
          <h4 className="font-semibold">Cart</h4>
          <div className="mt-3 text-sm text-gray-600">2 items • ₹520</div>
          <div className="mt-4">
            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}
