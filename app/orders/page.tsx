'use client';

import React from 'react'
import { Card } from '@/components/ui/card'
import ActiveOrders from '@/components/orders/ActiveOrders'
import MenuItems from '@/components/orders/MenuItems'
import OrderForm from '@/components/orders/OrderForm'
import SurgeIndicator from '@/components/orders/SurgeIndicator'

export default function Orders() {
  const sampleOrders = [
    { id: 'ORD001', customer: 'Aman Sharma', address: 'Bandra, Mumbai', items: [{ name: 'Biryani', qty: 1 }], total: 12.99, status: 'preparing' },
    { id: 'ORD002', customer: 'Priya Patel', address: 'Connaught Place, Delhi', items: [{ name: 'Butter Chicken', qty: 1 }], total: 14.5, status: 'out-for-delivery' },
    { id: 'ORD003', customer: 'Rohit Singh', address: 'Koramangala, Bengaluru', items: [{ name: 'Masala Dosa', qty: 2 }], total: 8.0, status: 'accepted' },
    { id: 'ORD004', customer: 'Sana Khan', address: 'Old Delhi, Delhi', items: [{ name: 'Samosa', qty: 3 }], total: 4.5, status: 'delivered' },
    { id: 'ORD005', customer: 'Arjun Rao', address: 'Colaba, Mumbai', items: [{ name: 'Margherita Pizza', qty: 1 }], total: 11.0, status: 'preparing' },
    { id: 'ORD006', customer: 'Meera Iyer', address: 'Chennai', items: [{ name: 'Idli Sambar', qty: 2 }], total: 6.0, status: 'preparing' },
    { id: 'ORD007', customer: 'Liu Wei', address: 'Beijing', items: [{ name: 'Peking Duck', qty: 1 }], total: 25.0, status: 'delivered' },
    { id: 'ORD008', customer: 'Hiro Tanaka', address: 'Tokyo', items: [{ name: 'Sushi Platter', qty: 1 }], total: 30.0, status: 'accepted' }
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Order Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Active Orders</h2>
          <ActiveOrders orders={sampleOrders} />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">New Order</h2>
          <OrderForm 
            selectedLocation={{
              id: 'default',
              name: 'Downtown',
              zone: 'Central',
              lat: 40.7128,
              lng: -74.0060
            }}
            cartItems={[]}
            subtotal={0}
            surgeMultiplier={1}
            onLocationSelect={() => {}}
            onSubmit={() => {}}
          />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Menu Items</h2>
          <MenuItems onAddToCart={() => {}} />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Surge Status</h2>
          <SurgeIndicator multiplier={1} />
        </Card>
      </div>
    </div>
  )
}