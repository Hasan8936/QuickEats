import React from 'react';
import { getAllOrders } from '@/lib/data';
import { Order } from '@/types';
import OrderForm from "@/components/orders/OrderForm";
import SurgeIndicator from "@/components/orders/SurgeIndicator";
import MenuItems from "@/components/orders/MenuItems";
import ActiveOrders from "@/components/orders/ActiveOrders";

export default function CustomerOrders() {
  const orders = getAllOrders();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Orders</h1>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Orders Section */}
        <div className="space-y-6">
          <ActiveOrders orders={orders} />
          <SurgeIndicator multiplier={1.2} />
        </div>

        {/* Order Form and Menu Section */}
        <div className="space-y-6">
          <OrderForm 
            selectedLocation={{ base_delivery_fee: 30 }}
            cartItems={[]}
            subtotal={0}
            surgeMultiplier={1.2}
            onPlaceOrder={async () => {}}
            isLoading={false}
          />
          <MenuItems onAddToCart={() => {}} />
        </div>
      </div>
    </div>
  );
}