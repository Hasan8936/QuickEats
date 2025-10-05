"use client"
import React from 'react'

type Order = {
  id: string;
  customer?: string;
  address?: string;
  items?: { name: string; qty: number }[];
  total?: number;
  status?: string;
}

export default function ActiveOrders({ orders }: { orders: Order[] }) {
  return (
    <div>
      {(!orders || orders.length === 0) ? (
        <p className="text-sm text-gray-500">No active orders.</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((o) => (
            <li key={o.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-gray-500">{o.id}</div>
                  <div className="font-semibold">{o.customer}</div>
                  <div className="text-sm text-gray-500">{o.address}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${o.total?.toFixed(2)}</div>
                  <div className="text-xs text-gray-500">{o.status}</div>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Items: {o.items?.map(it => `${it.name} x${it.qty}`).join(', ')}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
