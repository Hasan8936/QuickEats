"use client"
import useSWR from 'swr'
import Link from 'next/link'
import React from 'react'
import { Card } from '@/components/ui/card'
import PartnerCard from '@/components/partners/PartnerCard'
import OrderAssignment from '@/components/partners/OrderAssignment'
import partnersData from '@/../Entities/DeliveryPartner.json'

export default function Partners() {
  const partners = partnersData.deliveryPartners || []

  // Filter for Lucknow partners per user request
  const lucknowPartners = partners.filter((p: any) => p.city === 'Lucknow' || (p.current_location && p.current_location.toLowerCase().includes('lucknow')))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Delivery Partners</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Active Partners (Lucknow)</h2>
          <div className="space-y-4">
            {lucknowPartners.map((partner: any) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
            {lucknowPartners.length === 0 && <p className="text-gray-600">No partners found for Lucknow.</p>}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Assignments</h2>
          <OrderAssignment 
            orders={[]}
            partners={partners}
            selectedPartner={null}
            onAssignOrder={() => {}}
          />
        </Card>
      </div>
    </div>
  )
}