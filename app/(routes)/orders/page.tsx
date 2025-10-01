import React from 'react'
import { Card } from '@/Components/ui/card'
import ActiveOrders from '@/Components/orders/ActiveOrders'
import MenuItems from '@/Components/orders/MenuItems'
import OrderForm from '@/Components/orders/OrderForm'
import SurgeIndicator from '@/Components/orders/SurgeIndicator'

export default function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Order Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Active Orders</h2>
          <ActiveOrders />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">New Order</h2>
          <OrderForm />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Menu Items</h2>
          <MenuItems />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Surge Status</h2>
          <SurgeIndicator />
        </Card>
      </div>
    </div>
  )
}