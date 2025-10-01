import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { MenuItem } from "@/types";

interface Location {
  base_delivery_fee?: number;
}

interface CustomerData {
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
}

interface OrderFormProps {
  selectedLocation: Location;
  cartItems: MenuItem[];
  subtotal: number;
  surgeMultiplier: number;
  onPlaceOrder: (customerData: CustomerData) => void;
  isLoading: boolean;
}

export default function OrderForm({ 
  selectedLocation, 
  cartItems, 
  subtotal, 
  surgeMultiplier, 
  onPlaceOrder, 
  isLoading 
}: OrderFormProps) {
  const [customerData, setCustomerData] = useState({
    customer_name: "",
    customer_phone: "",
    delivery_address: ""
  });

  const baseFee = selectedLocation?.base_delivery_fee || 30;
  const finalDeliveryFee = Math.round(baseFee * surgeMultiplier);
  const totalAmount = subtotal + finalDeliveryFee;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (customerData.customer_name && customerData.customer_phone && customerData.delivery_address) {
      onPlaceOrder(customerData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Separator />
      
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Delivery Details</h3>
        
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={customerData.customer_name}
            onChange={(e) => setCustomerData(prev => ({...prev, customer_name: e.target.value}))}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            value={customerData.customer_phone}
            onChange={(e) => setCustomerData(prev => ({...prev, customer_phone: e.target.value}))}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="address">Complete Address</Label>
          <Textarea
            id="address"
            placeholder="Enter complete delivery address"
            value={customerData.delivery_address}
            onChange={(e) => setCustomerData(prev => ({...prev, delivery_address: e.target.value}))}
            required
          />
        </div>
      </div>

      <Separator />
      
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Order Summary</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>₹{subtotal}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Base Delivery Fee</span>
            <span>₹{baseFee}</span>
          </div>
          
          {surgeMultiplier !== 1.0 && (
            <div className="flex justify-between text-orange-600">
              <span>Surge Pricing ({surgeMultiplier}x)</span>
              <span>₹{finalDeliveryFee - baseFee}</span>
            </div>
          )}
          
          <div className="flex justify-between font-medium border-t pt-2">
            <span>Final Delivery Fee</span>
            <span>₹{finalDeliveryFee}</span>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex justify-between text-lg font-bold">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3"
        disabled={isLoading || !customerData.customer_name || !customerData.customer_phone || !customerData.delivery_address}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Placing Order...
          </>
        ) : (
          <>Place Order - ₹{totalAmount}</>
        )}
      </Button>
    </form>
  );
}