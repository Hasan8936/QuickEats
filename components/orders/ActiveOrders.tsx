"use client"
import React from 'react'

type Order = {
  id: string;
  customer?: string;
  address?: string;
  items?: { name: string; qty: number }[];
  total?: number;
  status?: string;
  partner?: { name: string; status?: 'available'|'busy'|'offline' } | null;
}

export default function ActiveOrders({ orders }: { orders: Order[] }) {
  return (
    <div>
      {(!orders || orders.length === 0) ? (
        <p className="text-sm text-gray-500">No active orders.</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((o) => (
              <li key={o.id} className="p-4 card flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-gray-500">{o.id}</div>
                  <div className="font-semibold">{o.customer}</div>
                  <div className="text-sm text-gray-500">{o.address}</div>
                </div>

                <div className="text-right">
                  <div className="font-medium">₹{o.total?.toFixed(2)}</div>
                  <div className="text-xs text-gray-500">{o.status}</div>
                </div>
              </div>

              <div className="mt-0 text-sm text-gray-600">
                Items: {o.items?.map(it => `${it.name} x${it.qty}`).join(', ')}
              </div>

              {/* partner info */}
              {o.partner ? (
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">Partner: <span className="font-medium">{o.partner.name}</span></div>
                  <div>
                        <span className={
                          o.partner.status === 'available' ? 'badge-available' : o.partner.status === 'busy' ? 'badge-busy' : 'badge-offline'
                        }>{o.partner.status ?? 'unknown'}</span>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-500">Partner: <span className="italic">not assigned</span></div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
