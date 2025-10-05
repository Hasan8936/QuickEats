"use client"
import React from 'react'

const FAMOUS_FOODS = [
  { id: 'f1', name: 'Biryani', price: 12.99 },
  { id: 'f2', name: 'Butter Chicken', price: 14.5 },
  { id: 'f3', name: 'Masala Dosa', price: 4.0 },
  { id: 'f4', name: 'Samosa (3 pcs)', price: 3.0 },
  { id: 'f5', name: 'Margherita Pizza', price: 11.0 },
  { id: 'f6', name: 'Idli Sambar', price: 3.5 },
  { id: 'f7', name: 'Peking Duck', price: 25.0 },
  { id: 'f8', name: 'Sushi Platter', price: 30.0 }
]

export default function MenuItems({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  return (
    <div className="space-y-3">
      {FAMOUS_FOODS.map(item => (
        <div key={item.id} className="flex justify-between items-center">
          <div>
            <div className="font-medium">{item.name}</div>
            <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
          </div>
          <button className="btn btn-sm" onClick={() => onAddToCart(item)}>Add</button>
        </div>
      ))}
    </div>
  )
}
