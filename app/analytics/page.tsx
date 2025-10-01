'use client';

import React from 'react'
import { Card } from '@/components/ui/card'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Live Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Statistics</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Orders Today</p>
                <p className="text-2xl font-bold">157</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Active Orders</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Average Delivery Time</p>
                <p className="text-2xl font-bold">28m</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
                <p className="text-2xl font-bold">4.8</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Revenue Overview</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Today's Revenue</p>
                <p className="text-2xl font-bold">$3,847</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Average Order Value</p>
                <p className="text-2xl font-bold">$24.50</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Surge Revenue</p>
                <p className="text-2xl font-bold">$742</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Partner Earnings</p>
                <p className="text-2xl font-bold">$1,156</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Hourly Order Trend</h2>
          <div className="h-[300px] bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Order trend visualization will appear here</p>
          </div>
        </Card>
      </div>
    </div>
  )
}