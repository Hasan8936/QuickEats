import React, { useState, useEffect } from "react";
import { Order, Location, DeliveryPartner, SurgePolicy } from "@/entities/all";
import { InvokeLLM } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Clock, MapPin, TrendingUp, Users, Loader2, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import OrderForm from "../components/orders/OrderForm";
import SurgeIndicator from "../components/orders/SurgeIndicator";
import MenuItems from "../components/orders/MenuItems";
import ActiveOrders from "../components/orders/ActiveOrders";

export default function CustomerOrders() {
  const [locations, setLocations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [realTimeSurge, setRealTimeSurge] = useState({});
  const [liveStats, setLiveStats] = useState({ totalOrders: 0, activePartners: 0 });

  useEffect(() => {
    loadInitialData();
    const interval = setInterval(updateRealTimeData, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadInitialData = async () => {
    const [locationsData, ordersData] = await Promise.all([
      Location.list(),
      Order.list('-created_date', 20)
    ]);
    
    setLocations(locationsData);
    setOrders(ordersData);
    
    if (locationsData.length > 0) {
      setSelectedLocation(locationsData[0]);
    }
  };

  const updateRealTimeData = async () => {
    try {
      // Get current surge data
      const policies = await SurgePolicy.list();
      const partners = await DeliveryPartner.list();
      const recentOrders = await Order.list('-created_date', 50);
      
      const newSurgeData = {};
      let totalActiveOrders = 0;
      let activePartners = 0;

      for (const policy of policies) {
        const zoneOrders = recentOrders.filter(order => 
          order.delivery_zone === policy.zone_name && 
          ['pending', 'confirmed', 'preparing', 'out_for_delivery'].includes(order.status)
        ).length;
        
        const availablePartners = partners.filter(partner => 
          partner.current_location === policy.zone_name && 
          partner.status === 'available'
        ).length;

        // Calculate surge multiplier
        let surgeMultiplier = 1.0;
        if (zoneOrders > policy.demand_threshold_high || availablePartners < policy.supply_threshold_low) {
          surgeMultiplier = Math.min(2.5, 1 + (zoneOrders / 10) - (availablePartners / 5));
        } else if (zoneOrders < policy.demand_threshold_low && availablePartners > 5) {
          surgeMultiplier = Math.max(0.8, 1 - (availablePartners - zoneOrders) / 20);
        }

        newSurgeData[policy.zone_name] = {
          multiplier: Math.round(surgeMultiplier * 100) / 100,
          activeOrders: zoneOrders,
          availablePartners
        };

        totalActiveOrders += zoneOrders;
      }

      activePartners = partners.filter(p => p.status === 'available').length;
      
      setRealTimeSurge(newSurgeData);
      setLiveStats({ totalOrders: totalActiveOrders, activePartners });
    } catch (error) {
      console.error("Error updating real-time data:", error);
    }
  };

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.name === item.name);
      if (existing) {
        return prev.map(p => p.name === item.name ? {...p, quantity: p.quantity + 1} : p);
      }
      return [...prev, {...item, quantity: 1}];
    });
  };

  const updateCartItem = (itemName, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.name !== itemName));
    } else {
      setCartItems(prev => prev.map(item => 
        item.name === itemName ? {...item, quantity} : item
      ));
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const placeOrder = async (customerData) => {
    setIsPlacingOrder(true);
    try {
      const subtotal = calculateSubtotal();
      const location = locations.find(loc => loc.zone_name === selectedLocation.zone_name);
      const baseFee = location?.base_delivery_fee || 30;
      const surgeData = realTimeSurge[selectedLocation.zone_name];
      const surgeMultiplier = surgeData?.multiplier || 1.0;
      const finalDeliveryFee = Math.round(baseFee * surgeMultiplier);

      const orderData = {
        ...customerData,
        delivery_zone: selectedLocation.zone_name,
        items: cartItems,
        subtotal,
        base_delivery_fee: baseFee,
        surge_multiplier: surgeMultiplier,
        final_delivery_fee: finalDeliveryFee,
        total_amount: subtotal + finalDeliveryFee,
        estimated_delivery_time: 25 + Math.round(Math.random() * 15)
      };

      await Order.create(orderData);
      setCartItems([]);
      loadInitialData();
    } catch (error) {
      console.error("Error placing order:", error);
    }
    setIsPlacingOrder(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Delicious Food, <span className="text-yellow-300">Smart Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Experience dynamic delivery pricing that adapts to real-time demand across Lucknow
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Real-time Pricing</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Fast Delivery</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Quality Food</span>
              </div>
            </div>
          </div>
          
          {/* Live Stats */}
          <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShoppingCart className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">Active Orders</span>
                </div>
                <p className="text-2xl font-bold">{liveStats.totalOrders}</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">Available Partners</span>
                </div>
                <p className="text-2xl font-bold">{liveStats.activePartners}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Ordering Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Location Selection */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Select Your Delivery Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <motion.div
                      key={location.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedLocation?.id === location.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <h3 className="font-semibold text-lg">{location.zone_name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {location.area_names?.join(', ')}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Base Fee: ₹{location.base_delivery_fee}</span>
                        {realTimeSurge[location.zone_name] && (
                          <SurgeIndicator 
                            multiplier={realTimeSurge[location.zone_name].multiplier}
                            size="sm"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu Items */}
            {selectedLocation && (
              <MenuItems onAddToCart={addToCart} />
            )}
          </div>

          {/* Order Summary & Cart */}
          <div className="space-y-6">
            {/* Real-time Surge Info */}
            {selectedLocation && realTimeSurge[selectedLocation.zone_name] && (
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    Live Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <SurgeIndicator 
                      multiplier={realTimeSurge[selectedLocation.zone_name].multiplier}
                      size="lg"
                    />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Active Orders</p>
                        <p className="font-semibold">{realTimeSurge[selectedLocation.zone_name].activeOrders}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Available Partners</p>
                        <p className="font-semibold">{realTimeSurge[selectedLocation.zone_name].availablePartners}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Cart */}
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Your Order ({cartItems.length} items)
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400">Add some delicious items to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">₹{item.price} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => updateCartItem(item.name, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="font-medium">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => updateCartItem(item.name, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {selectedLocation && (
                      <OrderForm
                        selectedLocation={selectedLocation}
                        cartItems={cartItems}
                        subtotal={calculateSubtotal()}
                        surgeMultiplier={realTimeSurge[selectedLocation.zone_name]?.multiplier || 1.0}
                        onPlaceOrder={placeOrder}
                        isLoading={isPlacingOrder}
                      />
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Orders */}
        <div className="mt-12">
          <ActiveOrders orders={orders} />
        </div>
      </div>
    </div>
  );
}