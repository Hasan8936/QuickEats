import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingBag, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function SurgePolicyCard({ policy, realTimeData, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    demand_threshold_low: policy.demand_threshold_low,
    demand_threshold_high: policy.demand_threshold_high,
    supply_threshold_low: policy.supply_threshold_low,
    max_surge_multiplier: policy.max_surge_multiplier
  });

  const handleSave = async () => {
    await onUpdate(editData);
    setIsEditing(false);
  };

  const getSurgeColor = (surge) => {
    if (surge >= 2.0) return "bg-red-500 text-white";
    if (surge >= 1.5) return "bg-orange-500 text-white";
    if (surge >= 1.2) return "bg-yellow-500 text-white";
    return "bg-green-500 text-white";
  };

  const getDemandColor = (level) => {
    switch (level) {
      case 'high': return "bg-red-100 text-red-800";
      case 'medium': return "bg-yellow-100 text-yellow-800";
      case 'low': return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{policy.zone_name}</h3>
              {realTimeData && (
                <div className="flex items-center gap-2 mt-2">
                  <Badge className={getDemandColor(realTimeData.demandLevel)}>
                    {realTimeData.demandLevel} demand
                  </Badge>
                  <Badge className={getSurgeColor(realTimeData.currentSurge)}>
                    {realTimeData.currentSurge}x surge
                  </Badge>
                </div>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Settings className="w-4 h-4 mr-2" />
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>

          {/* Real-time Stats */}
          {realTimeData && (
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">Active Orders</p>
                  <p className="font-bold">{realTimeData.activeOrders}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-xs text-gray-500">Available Partners</p>
                  <p className="font-bold">{realTimeData.availablePartners}</p>
                </div>
              </div>
            </div>
          )}

          {/* Policy Configuration */}
          {isEditing ? (
            <div className="space-y-4 p-4 border rounded-lg bg-blue-50">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`low-${policy.id}`}>Low Demand Threshold</Label>
                  <Input
                    id={`low-${policy.id}`}
                    type="number"
                    min="0"
                    value={editData.demand_threshold_low}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      demand_threshold_low: parseInt(e.target.value)
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor={`high-${policy.id}`}>High Demand Threshold</Label>
                  <Input
                    id={`high-${policy.id}`}
                    type="number"
                    min="0"
                    value={editData.demand_threshold_high}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      demand_threshold_high: parseInt(e.target.value)
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor={`supply-${policy.id}`}>Supply Threshold</Label>
                  <Input
                    id={`supply-${policy.id}`}
                    type="number"
                    min="0"
                    value={editData.supply_threshold_low}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      supply_threshold_low: parseInt(e.target.value)
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor={`max-${policy.id}`}>Max Surge Multiplier</Label>
                  <Input
                    id={`max-${policy.id}`}
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={editData.max_surge_multiplier}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      max_surge_multiplier: parseFloat(e.target.value)
                    }))}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600">
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
 