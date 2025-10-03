"use client"
import React from 'react'

export default function PartnerCard({ partner }: { partner: any }) {
  return (
    <div className="p-3 border rounded">
      <div className="font-semibold">{partner.name}</div>
      <div className="text-sm text-gray-500">Status: {partner.status}</div>
    </div>
  )
}
