import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Loader2 } from "lucide-react";

export default function SimulateDemand({ locations, onSimulate, isSimulating }) {
  const [selectedZone, setSelectedZone] = useState("");
  const [orderCount, setOrderCount] = useState(10);

  const handleSimulate = () => {
    if (selectedZone && orderCount > 0) {
      onSimulate(selectedZone, orderCount);
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Demand Spike Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label>Select Zone</Label>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a zone" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.id} value={location.zone_name}>
                    {location.zone_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="order-count">Number of Orders</Label>
            <Input
              id="order-count"
              type="number"
              min="1"
              max="50"
              value={orderCount}
              onChange={(e) => setOrderCount(parseInt(e.target.value))}
            />
          </div>

          <Button
            onClick={handleSimulate}
            disabled={!selectedZone || orderCount <= 0 || isSimulating}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            {isSimulating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Simulating...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Simulate Demand Spike
              </>
            )}
          </Button>

          <div className="text-xs text-gray-500 space-y-1">
            <p>• Creates dummy orders in selected zone</p>
            <p>• Watch surge pricing respond in real-time</p>
            <p>• Orders will be marked as "confirmed"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}