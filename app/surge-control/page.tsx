'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import PricingControls from '@/components/surge/PricingControls';
import SimulateDemand from '@/components/surge/SimulateDemand';
import SurgePolicyCard from '@/components/surge/SurgePolicyCard';

export default function SurgeControl() {
  const policies = [{
    id: 'SP001',
    zone_name: 'Downtown',
    demand_threshold_low: 1.2,
    demand_threshold_high: 2.0,
    supply_threshold_low: 0.5,
    max_surge_multiplier: 2.0,
    active: true
  }];

  const realTimeData = {
    'SP001': {
      demandLevel: 'medium' as const,
      currentSurge: 1.2,
      activeOrders: 15,
      availablePartners: 8
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Surge Pricing Control</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Policies</h2>
          <div className="space-y-4">
            <SurgePolicyCard 
              policy={policies[0]}
              realTimeData={realTimeData['SP001']}
              onUpdate={async (data) => {
                console.log('Updating policy:', data);
                return Promise.resolve();
              }}
            />
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Price Controls</h2>
          <PricingControls 
            policies={policies}
            realTimeData={realTimeData}
            onPolicyUpdate={async (policyId, update) => {
              console.log('Updating policy:', policyId, update);
              return Promise.resolve();
            }}
          />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Demand Simulation</h2>
          <SimulateDemand 
            locations={[
              { 
                id: 'ZONE001', 
                name: 'Downtown', 
                zone: 'Central',
                coordinates: {
                  lat: 40.7128,
                  lng: -74.0060
                }
              }
            ]}
            onSimulate={async (locations, duration) => {
              console.log('Simulating demand:', locations, duration);
              return Promise.resolve();
            }}
            isSimulating={false}
          />
        </Card>
      </div>
    </div>
  )
}