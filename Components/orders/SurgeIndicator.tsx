import React from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function SurgeIndicator({ multiplier, size = "md" }) {
  const getSurgeColor = () => {
    if (multiplier >= 2.0) return "bg-red-500 text-white";
    if (multiplier >= 1.5) return "bg-orange-500 text-white";
    if (multiplier >= 1.2) return "bg-yellow-500 text-white";
    if (multiplier < 1.0) return "bg-green-500 text-white";
    return "bg-gray-500 text-white";
  };

  const getSurgeText = () => {
    if (multiplier >= 2.0) return "High Surge";
    if (multiplier >= 1.5) return "Medium Surge";
    if (multiplier >= 1.2) return "Low Surge";
    if (multiplier < 1.0) return "Discount";
    return "Normal";
  };

  const Icon = multiplier >= 1.0 ? TrendingUp : TrendingDown;
  const iconSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3 h-3" : "w-4 h-4";
  const textSize = size === "lg" ? "text-base" : size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <Badge className={`${getSurgeColor()} ${textSize} flex items-center gap-1`}>
        <Icon className={iconSize} />
        {getSurgeText()}
      </Badge>
      <span className={`font-bold ${textSize}`}>
        {multiplier}x
      </span>
      {multiplier !== 1.0 && (
        <span className={`text-gray-500 ${textSize}`}>
          ({multiplier > 1.0 ? '+' : ''}{Math.round((multiplier - 1.0) * 100)}%)
        </span>
      )}
    </div>
  );
}