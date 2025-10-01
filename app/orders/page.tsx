'use client';

import React from 'react'
import { Card } from '@/components/ui/card'
import ActiveOrders from '@/components/orders/ActiveOrders'
import MenuItems from '@/components/orders/MenuItems'
import OrderForm from '@/components/orders/OrderForm'
import SurgeIndicator from '@/components/orders/SurgeIndicator'

export default function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Order Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Active Orders</h2>
          <ActiveOrders orders={[]} />
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