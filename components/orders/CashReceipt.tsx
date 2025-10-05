"use client"
import React from 'react'

type ReceiptProps = {
  order: {
    id: string;
    customer?: string;
    items?: { name: string; qty: number; price?: number }[];
    subtotal?: number;
    deliveryFee?: number;
    surge?: number;
    total?: number;
    paid?: boolean;
  } | null;
}

export default function CashReceipt({ order }: ReceiptProps) {
  if (!order) return (
    <div className="p-4 card">
      <div className="text-sm text-gray-500">No receipt available.</div>
    </div>
  )

  const items = order.items || []
  const subtotal = order.subtotal ?? items.reduce((s, it) => s + (it.price ?? 0) * (it.qty || 1), 0)
  const deliveryFee = order.deliveryFee ?? 0
  const surge = order.surge ?? 1
  const surgeAmount = Math.round((subtotal + deliveryFee) * (surge - 1))
  const total = order.total ?? Math.round((subtotal + deliveryFee) * surge)

  return (
    <div className="p-4 card-strong">
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="text-sm text-gray-500">Receipt</div>
          <div className="font-semibold">Order {order.id}</div>
          <div className="text-sm text-gray-500">{order.customer}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">{order.paid ? 'Paid' : 'Cash on delivery'}</div>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        {items.map((it, idx) => (
          <div key={idx} className="flex justify-between">
            <div>{it.name} x{it.qty}</div>
            <div>₹{((it.price ?? 0) * (it.qty || 1)).toFixed(2)}</div>
          </div>
        ))}

        <div className="flex justify-between border-t pt-2">
          <div className="text-sm text-gray-500">Subtotal</div>
          <div>₹{subtotal.toFixed(2)}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-gray-500">Delivery Fee</div>
          <div>₹{deliveryFee.toFixed(2)}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-gray-500">Surge ({surge}x)</div>
          <div>₹{surgeAmount}</div>
        </div>

        <div className="flex justify-between font-semibold text-lg pt-2">
          <div>Total</div>
          <div>₹{total}</div>
        </div>

        <div className="mt-3 text-xs text-gray-500">Thank you for ordering with QuickEats.</div>
      </div>
    </div>
  )
}
