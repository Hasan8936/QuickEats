"use client"
import React, { useEffect, useState } from 'react'

export default function LivePricingCard(){
  const [multiplier, setMultiplier] = useState<number | null>(null)
  const [stats, setStats] = useState<any>(null)
  const [location, setLocation] = useState<string>('Downtown')

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const res = await fetch(`/api/surge?location=${encodeURIComponent(location)}`)
        const data = await res.json()
        if (!mounted) return
        setMultiplier(data.multiplier)
        setStats(data.stats)
      } catch (e) {
        console.error(e)
      }
    }
    load()
    const timer = setInterval(load, 10000) // refresh every 10s
    return () => { mounted = false; clearInterval(timer) }
  }, [location])

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Live Pricing</h3>
          <div className="mt-3">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-3 py-1 rounded-full">{multiplier && multiplier >= 1.8 ? 'High Surge' : 'Normal'}</div>
            <div className="mt-4 text-2xl font-bold">{multiplier ? `${multiplier}x` : '—'} <span className="text-sm font-medium text-gray-500">{multiplier ? `(${Math.round((multiplier-1)*100)}%)` : ''}</span></div>
          </div>
        </div>

        <div className="hidden sm:block flex-shrink-0 ml-4">
          <img src="/illustrations/smart-pricing.svg" alt="Smart pricing" className="w-36 h-24 object-contain" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
        <div className="bg-gray-50 p-3 rounded">Active Orders<br/><strong>{stats?.activeOrders ?? '—'}</strong></div>
        <div className="bg-gray-50 p-3 rounded">Available Partners<br/><strong>{stats?.availablePartners ?? '—'}</strong></div>
      </div>

      <div className="mt-4">
        <label className="text-xs text-gray-500">Location</label>
        <select value={location} onChange={(e)=>setLocation(e.target.value)} className="ml-2 px-2 py-1 rounded border">
          <option>Downtown</option>
          <option>Hazratganj</option>
          <option>Gomti Nagar</option>
          <option>Aliganj</option>
          <option>Kaiserbagh</option>
        </select>
      </div>
    </div>
  )
}
