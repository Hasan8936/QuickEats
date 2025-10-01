import React from 'react';
import { getAllSurgePolicies } from '@/lib/data';
import { SurgePolicy } from '@/types';
import SurgePolicyCard from "@/components/surge/SurgePolicyCard";
import PricingControls from "@/components/surge/PricingControls";
import SimulateDemand from "@/components/surge/SimulateDemand";

export default function SurgeControl() {
  const policies = getAllSurgePolicies();

  // Simulated real-time data for each zone
  const realTimeData = policies.map(policy => ({
    zoneId: policy.id,
    demandLevel: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
    currentSurge: Number((1 + Math.random()).toFixed(1)),
    activeOrders: Math.floor(Math.random() * 20),
    availablePartners: Math.floor(Math.random() * 10)
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Surge Control</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Surge Policies */}
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <SurgePolicyCard
              key={policy.id}
              policy={policy}
              realTimeData={realTimeData[index]}
              onUpdate={async () => {
                // Handle policy update
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <PricingControls />
          <SimulateDemand />
        </div>
      </div>
    </div>
  );
}