'use client';

import React from 'react'
import { Card } from '@/components/ui/card'
import PricingControls from '@/components/surge/PricingControls'
import SimulateDemand from '@/components/surge/SimulateDemand'
import SurgePolicyCard from '@/components/surge/SurgePolicyCard'

export default function SurgeControl() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Surge Pricing Control</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Policies</h2>
          <div className="space-y-4">
            <SurgePolicyCard 
              policy={{
                id: '1',
                title: 'Standard Surge',
                description: 'Automatically adjusts prices based on demand',
                thresholds: [
                  { demand: 1.5, multiplier: 1.2 },
                  { demand: 2.0, multiplier: 1.5 },
                  { demand: 3.0, multiplier: 2.0 }
                ],
                is_active: true
              }}
            />
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Price Controls</h2>
          <PricingControls 
            policies={[]}
            realTimeData={{}}
            onPolicyUpdate={() => {}}
          />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Demand Simulation</h2>
          <SimulateDemand 
            locations={[]}
            onSimulate={() => {}}
            isSimulating={false}
          />
        </Card>
      </div>
    </div>
  )
}