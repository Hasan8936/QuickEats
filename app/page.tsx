"use client"

import Link from 'next/link'
import Hero from '@/components/home/Hero'
import LocationSelector from '@/components/home/LocationSelector'
import LivePricingCard from '@/components/home/LivePricingCard'
import RestaurantGrid from '@/components/home/RestaurantGrid'
import FloatingCart from '@/components/ui/FloatingCart'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Select Your Delivery Location</h2>
              <div className="hidden sm:block">
                <LocationSelector />
              </div>
            </div>

            <RestaurantGrid />

            {/* Quick Actions section removed as requested */}
          </div>

          <aside>
            <LivePricingCard />
            <div className="mt-6 hidden sm:block">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li><Link href="/orders" className="text-orange-600 hover:underline">Active Orders</Link></li>
                  <li><Link href="/partners" className="text-orange-600 hover:underline">Manage Partners</Link></li>
                  <li><Link href="/surge-control" className="text-orange-600 hover:underline">Pricing Control</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <FloatingCart />
    </div>
  )
}