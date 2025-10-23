"use client"
import React from 'react'

export default function PartnerCard({ partner }: { partner: any }) {
  const initials = (partner.name || '')
    .split(' ')
    .map((s: string) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="p-3 border rounded flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
        {partner.photo ? (
          <img src={partner.photo} alt={partner.name} className="w-full h-full object-cover" onError={(e:any)=>{e.currentTarget.src='/food-images/placeholder.png'}} />
        ) : (
          <div className="text-sm font-bold text-gray-600">{initials || 'DP'}</div>
        )}
      </div>

      <div className="flex-1">
        <div className="font-semibold">{partner.name}</div>
        <div className="text-sm text-gray-500">Status: {partner.status}{partner.rating ? ` • ${partner.rating} ★` : ''}</div>
      </div>
    </div>
  )
}
