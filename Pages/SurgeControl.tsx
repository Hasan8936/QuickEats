
import React, { useState, useEffect, useCallback } from "react";
import { Location, SurgePolicy, Order, DeliveryPartner } from "@/entities/all";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Settings, AlertTriangle, Activity } from "lucide-react";

import SurgePolicyCard from "../components/surge/SurgePolicyCard";
import SimulateDemand from "../components/surge/SimulateDemand";
import PricingControls from "../components/surge/PricingControls";

export default function SurgeControl() {
  const [policies, setPolicies] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [realTimeData, setRealTimeData] = useState({});

  const loadData = async () => {
    const [policiesData, locationsData] = await Promise.all([
      SurgePolicy.list(),
      Location.list()
    ]);
    
    setPolicies(policiesData);
    setLocations(locationsData);
  };

  const updateRealTimeData = useCallback(async () => {
    try {
      const [orders, partners] = await Promise.all([
        Order.list('-created_date', 100),
        DeliveryPartner.list()
      ]);

      const newRealTimeData = {};
      
      for (const policy of policies) {
        const zoneOrders = orders.filter(order => 
          order.delivery_zone === policy.zone_name && 
          ['pending', 'confirmed', 'preparing', 'out_for_delivery'].includes(order.status)
        );
        
        const availablePartners = partners.filter(partner => 
          partner.current_location === policy.zone_name && 
          partner.status === 'available'
        );

        // Calculate dynamic surge multiplier
        const demandFactor = Math.max(0, zoneOrders.length - policy.demand_threshold_low) / 10;
        const supplyFactor = Math.max(0, policy.supply_threshold_low - availablePartners.length) / 5;
        
        let surgeMultiplier = 1.0 + demandFactor + supplyFactor;
        surgeMultiplier = Math.min(policy.max_surge_multiplier, Math.max(policy.min_surge_multiplier, surgeMultiplier));
        surgeMultiplier = Math.round(surgeMultiplier * 100) / 100;

        newRealTimeData[policy.zone_name] = {
          activeOrders: zoneOrders.length,
          availablePartners: availablePartners.length,
          currentSurge: surgeMultiplier,
          demandLevel: zoneOrders.length >= policy.demand_threshold_high ? 'high' : 
                      zoneOrders.length >= policy.demand_threshold_low ? 'medium' : 'low'
        };

        // Update location with current surge
        const location = locations.find(loc => loc.zone_name === policy.zone_name);
        if (location && location.current_surge_multiplier !== surgeMultiplier) {
          await Location.update(location.id, { current_surge_multiplier: surgeMultiplier });
        }

        // Update policy with current data
        if (policy.current_active_orders !== zoneOrders.length || 
            policy.available_partners !== availablePartners.length) {
          await SurgePolicy.update(policy.id, {
            current_active_orders: zoneOrders.length,
            available_partners: availablePartners.length
          });
        }
      }

      setRealTimeData(newRealTimeData);
    } catch (error) {
      console.error("Error updating real-time data:", error);
    }
  }, [policies, locations]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (policies.length > 0) {
      updateRealTimeData();
      const interval = setInterval(updateRealTimeData, 3000);
      return () => clearInterval(interval);
    }
  }, [policies, updateRealTimeData]);

  const updatePolicyThresholds = async (policyId, updates) => {
    await SurgePolicy.update(policyId, updates);
    loadData();
  };

  const simulateDemandSpike = async (zoneName, orderCount) => {
    setIsSimulating(true);
    
    // Create multiple dummy orders to simulate demand spike
    const dummyOrders = Array.from({ length: orderCount }, (_, i) => ({
      customer_name: `Test Customer ${i + 1}`,
      customer_phone: "9999999999",
      delivery_address: "Simulated Address",
      delivery_zone: zoneName,
      items: [{ name: "Test Item", quantity: 1, price: 100 }],
      subtotal: 100,
      base_delivery_fee: 30,
      surge_multiplier: 1.0,
      final_delivery_fee: 30,
      total_amount: 130,
      status: "confirmed"
    }));

    for (const order of dummyOrders) {
      await Order.create(order);
    }

    // Wait a bit then update data
    setTimeout(() => {
      updateRealTimeData();
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Surge <span className="text-purple-200">Control Center</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Monitor and control dynamic pricing across all delivery zones in real-time
            </p>
            
            {/* Live Stats */}
            <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-300" />
                    <span className="font-semibold">Active Zones</span>
                  </div>
                  <p className="text-2xl font-bold">{policies.length}</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-purple-300" />
                    <span className="font-semibold">Avg Surge</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {Object.values(realTimeData).length > 0 ? 
                      (Object.values(realTimeData).reduce((sum, data) => sum + data.currentSurge, 0) / Object.values(realTimeData).length).toFixed(1)
                      : '1.0'
                    }x
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Control Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Surge Policies */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Zone Surge Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {policies.length === 0 ? (
                  <div className="text-center py-12">
                    <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No surge policies configured</p>
                    <p className="text-gray-400">Create policies to enable dynamic pricing</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {policies.map((policy) => (
                      <SurgePolicyCard
                        key={policy.id}
                        policy={policy}
                        realTimeData={realTimeData[policy.zone_name]}
                        onUpdate={(updates) => updatePolicyThresholds(policy.id, updates)}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Side Controls */}
          <div className="space-y-6">
            {/* Demand Simulation */}
            <SimulateDemand
              locations={locations}
              onSimulate={simulateDemandSpike}
              isSimulating={isSimulating}
            />

            {/* Pricing Controls */}
            <PricingControls
              policies={policies}
              realTimeData={realTimeData}
              onPolicyUpdate={updatePolicyThresholds}
            />

            {/* System Status */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Real-time Pricing Active</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Monitoring {policies.length} Zones</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Updates Every 3 Seconds</span>
                  </div>

                  {Object.values(realTimeData).some(data => data.currentSurge > 2.0) && (
                    <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">High surge detected in some zones</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
