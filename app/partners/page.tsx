'use client';

import React from 'react'
import { Card } from '@/components/ui/card'
import PartnerCard from '@/components/partners/PartnerCard'
import OrderAssignment from '@/components/partners/OrderAssignment'

export default function Partners() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Delivery Partners</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Active Partners</h2>
          <div className="space-y-4">
            <PartnerCard 
              partner={{
                id: '1',
                name: 'John Doe',
                status: 'available',
                current_location: { lat: 40.7128, lng: -74.0060 },
                rating: 4.8,
                total_deliveries: 150
              }}
            />
            <PartnerCard 
              partner={{
                id: '2',
                name: 'Jane Smith',
                status: 'on_delivery',
                current_location: { lat: 40.7580, lng: -73.9855 },
                rating: 4.9,
                total_deliveries: 200
              }}
            />
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Assignments</h2>
          <OrderAssignment 
            orders={[]}
            partners={[]}
            selectedPartner={null}
            onAssignOrder={() => {}}
          />
        </Card>
      </div>
    </div>
  )
}