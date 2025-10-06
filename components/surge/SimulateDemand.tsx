import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Loader2 } from "lucide-react";
import { Location } from "@/types";

interface SimulateDemandProps {
  locations: Location[];
  onSimulate: (zone: string, count: number) => void;
  isSimulating: boolean;
}

export default function SimulateDemand({ locations, onSimulate, isSimulating }: SimulateDemandProps) {
  const [selectedZone, setSelectedZone] = useState("");
  const [orderCount, setOrderCount] = useState(10);
  const [photoIndex, setPhotoIndex] = useState(0);

  // rotating set of Indian food photos (Unsplash placeholders)
  const foodPhotos = [
    "https://images.unsplash.com/photo-1604908177522-6b9b6c4c0f3b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
    "https://images.unsplash.com/photo-1543353071-087092ec3934?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4"
  ];

  useEffect(() => {
    const t = setInterval(() => setPhotoIndex((i) => (i + 1) % foodPhotos.length), 3500);
    return () => clearInterval(t);
  }, []);

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
        <div className="space-y-4 lg:flex lg:gap-6">
          <div className="hidden lg:block lg:w-1/3">
            <div className="relative rounded-lg overflow-hidden shadow-md h-56 transform transition-all duration-500 hover:scale-105">
              <img
                src={foodPhotos[photoIndex]}
                alt="Indian food"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="absolute left-4 bottom-4 text-white">
                <div className="text-sm">Delicious Food</div>
                <div className="font-semibold text-lg">Smart Pricing</div>
              </div>
            </div>
          </div>

          <div className="lg:flex-1">
          <div>
            <Label>Select Zone</Label>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a zone" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.id} value={location.name}>
                    {location.name}
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
        </div>
      </CardContent>
    </Card>
  );
}