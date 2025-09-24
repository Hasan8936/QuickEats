import React, { useState, useEffect } from "react";
import { DeliveryPartner, Order } from "@/entities/all";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Star, Phone, Bike, TrendingUp, Clock } from "lucide-react";

import PartnerCard from "../components/partners/PartnerCard";
import OrderAssignment from "../components/partners/OrderAssignment";

export default function DeliveryPartners() {
  const [partners, setPartners] = useState([]);
  const [availableOrders, setAvailableOrders] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    const [partnersData, ordersData] = await Promise.all([
      DeliveryPartner.list(),
      Order.filter({ status: 'confirmed' }, '-created_date', 20)
    ]);
    
    setPartners(partnersData);
    setAvailableOrders(ordersData);
  };

  const updatePartnerStatus = async (partnerId, status) => {
    await DeliveryPartner.update(partnerId, { status });
    loadData();
  };

  const assignOrder = async (orderId, partnerId) => {
    await Order.update(orderId, { 
      assigned_partner: partnerId, 
      status: 'preparing' 
    });
    
    const partner = partners.find(p => p.id === partnerId);
    await DeliveryPartner.update(partnerId, { 
      active_orders: (partner.active_orders || 0) + 1,
      status: 'busy'
    });
    
    loadData();
  };

  const getStatusStats = () => {
    const available = partners.filter(p => p.status === 'available').length;
    const busy = partners.filter(p => p.status === 'busy').length;
    const offline = partners.filter(p => p.status === 'offline').length;
    return { available, busy, offline };
  };

  const stats = getStatusStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Delivery <span className="text-blue-200">Partners</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Manage delivery partner availability and optimize order assignments
            </p>
            
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="font-semibold">Available</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.available}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="font-semibold">Busy</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.busy}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="font-semibold">Offline</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.offline}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Partners List */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  All Delivery Partners ({partners.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {partners.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No delivery partners found</p>
                    <p className="text-gray-400">Partners will appear here once they register</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {partners.map((partner) => (
                      <PartnerCard
                        key={partner.id}
                        partner={partner}
                        onStatusUpdate={updatePartnerStatus}
                        onSelect={() => setSelectedPartner(partner)}
                        isSelected={selectedPartner?.id === partner.id}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="font-bold text-2xl text-green-600">
                      {partners.length > 0 ? Math.round(partners.reduce((sum, p) => sum + (p.total_deliveries || 0), 0) / partners.length) : 0}
                    </p>
                    <p className="text-sm text-gray-600">Avg Deliveries</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="font-bold text-2xl text-blue-600">
                      {partners.length > 0 ? (partners.reduce((sum, p) => sum + (p.rating || 0), 0) / partners.length).toFixed(1) : 0}
                    </p>
                    <p className="text-sm text-gray-600">Avg Rating</p>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="font-bold text-2xl text-orange-600">{stats.available}</p>
                    <p className="text-sm text-gray-600">Ready to Deliver</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Bike className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <p className="font-bold text-2xl text-purple-600">{stats.busy}</p>
                    <p className="text-sm text-gray-600">Currently Busy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Assignment */}
          <div className="space-y-6">
            <OrderAssignment
              orders={availableOrders}
              partners={partners}
              selectedPartner={selectedPartner}
              onAssignOrder={assignOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}