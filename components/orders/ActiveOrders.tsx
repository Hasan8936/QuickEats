"use client"
import React from 'react'

type Order = any

export default function ActiveOrders({ orders }: { orders: Order[] }) {
  return (
    <div>
      {orders.length === 0 ? (
        <p className="text-sm text-gray-500">No active orders.</p>
      ) : (
        <ul className="space-y-2">
          {orders.map((o, i) => (
            <li key={i} className="p-2 border rounded">Order {o.id ?? i}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
