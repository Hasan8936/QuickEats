import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle } from "lucide-react";

export default function PricingControls({ policies, realTimeData, onPolicyUpdate }) {
  const getHighSurgeZones = () => {
    return Object.entries(realTimeData).filter(([zone, data]) => data.currentSurge >= 2.0);
  };

  const emergencyReset = async (policyId) => {
    await onPolicyUpdate(policyId, {
      max_surge_multiplier: 1.5,
      demand_threshold_high: 20
    });
  };

  const highSurgeZones = getHighSurgeZones();

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-500" />
          Quick Controls
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* High Surge Alert */}
          {highSurgeZones.length > 0 && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-700">High Surge Alert</span>
              </div>
              <div className="space-y-2">
                {highSurgeZones.map(([zone, data]) => (
                  <div key={zone} className="flex justify-between items-center">
                    <span className="text-sm">{zone}</span>
                    <Badge className="bg-red-500 text-white">
                      {data.currentSurge}x
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Zone Status */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Zone Status</h4>
            {Object.entries(realTimeData).map(([zone, data]) => (
              <div key={zone} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm">{zone}</span>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={
                      data.demandLevel === 'high' ? 'border-red-500 text-red-700' :
                      data.demandLevel === 'medium' ? 'border-yellow-500 text-yellow-700' :
                      'border-green-500 text-green-700'
                    }
                  >
                    {data.demandLevel}
                  </Badge>
                  <span className="text-sm font-medium">{data.currentSurge}x</span>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Controls */}
          {highSurgeZones.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Emergency Controls</h4>
              {highSurgeZones.map(([zone, data]) => {
                const policy = policies.find(p => p.zone_name === zone);
                return policy ? (
                  <Button
                    key={zone}
                    variant="outline"
                    size="sm"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => emergencyReset(policy.id)}
                  >
                    Reset {zone} Surge
                  </Button>
                ) : null;
              })}
            </div>
          )}

          {/* Global Stats */}
          <div className="p-3 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Global Statistics</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Total Active Zones</span>
                <span>{Object.keys(realTimeData).length}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Surge</span>
                <span>
                  {Object.values(realTimeData).length > 0 ? 
                    (Object.values(realTimeData).reduce((sum, data) => sum + data.currentSurge, 0) / Object.values(realTimeData).length).toFixed(2)
                    : '1.00'
                  }x
                </span>
              </div>
              <div className="flex justify-between">
                <span>High Surge Zones</span>
                <span>{highSurgeZones.length}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}