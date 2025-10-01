import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone, Bike, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { DeliveryPartner } from "@/types";

interface PartnerCardProps {
  partner: DeliveryPartner;
  onStatusUpdate: (id: string | number, status: string) => void;
  onSelect: (partner: DeliveryPartner) => void;
  isSelected: boolean;
}

type PartnerStatus = string;

const STATUS_COLORS: Record<string, string> = {
  available: "bg-green-500 text-white",
  busy: "bg-orange-500 text-white",
  offline: "bg-gray-500 text-white"
};

type VehicleType = string;

const VEHICLE_ICONS: Record<string, React.ElementType> = {
  bike: Bike,
  scooter: Zap,
  bicycle: Bike
};

export default function PartnerCard({ partner, onStatusUpdate, onSelect, isSelected }: PartnerCardProps) {
  const VehicleIcon = VEHICLE_ICONS[partner.vehicle_type] || Bike;

  const getNextStatus = () => {
    switch (partner.status) {
      case 'offline': return 'available';
      case 'available': return 'busy';
      case 'busy': return 'offline';
      default: return 'available';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={() => onSelect(partner)}
    >
      <Card className="border hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{partner.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <Phone className="w-3 h-3" />
                  <span>{partner.phone}</span>
                </div>
              </div>
              <Badge className={STATUS_COLORS[partner.status]}>
                {partner.status}
              </Badge>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{partner.current_location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <VehicleIcon className="w-4 h-4 text-gray-400" />
                <span className="capitalize">{partner.vehicle_type}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{partner.rating} ({partner.active_orders} active orders)</span>
              </div>
            </div>

            {/* Active Orders */}
            {partner.active_orders > 0 && (
              <div className="bg-orange-50 p-2 rounded-lg">
                <p className="text-sm text-orange-700">
                  Currently handling {partner.active_orders} order{partner.active_orders > 1 ? 's' : ''}
                </p>
              </div>
            )}

            {/* Status Control */}
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                onStatusUpdate(partner.id, getNextStatus());
              }}
            >
              Set to {getNextStatus()}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}