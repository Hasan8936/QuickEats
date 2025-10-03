"use client"
import React from 'react'

export default function MenuItems({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  return (
    <div>
      <p className="text-sm text-gray-500">Menu is empty (placeholder).</p>
      <button className="mt-2 btn" onClick={() => onAddToCart({ id: 'sample' })}>Add sample item</button>
    </div>
  )
}
