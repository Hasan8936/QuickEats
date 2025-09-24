import React, { useState, useEffect } from "react";
import { Order, DeliveryPartner, Location, SurgePolicy } from "@/entities/all";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, MapPin, Clock, DollarSign, Activity, Users } from "lucide-react";

export default function LiveAnalytics() {
  const [analyticsData, setAnalyticsData] = useState({
    zoneStats: [],
    hourlyOrders: [],
    surgeHistory: [],
    revenueData: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
    const interval = setInterval(loadAnalytics, 10000);
    return () => clearInterval(interval);
  }, []);

  const loadAnalytics = async () => {
    try {
      const [orders, partners, locations, policies] = await Promise.all([
        Order.list('-created_date', 200),
        DeliveryPartner.list(),
        Location.list(),
        SurgePolicy.list()
      ]);

      // Zone Statistics
      const zoneStats = locations.map(location => {
        const zoneOrders = orders.filter(order => order.delivery_zone === location.zone_name);
        const activeOrders = zoneOrders.filter(order => 
          ['pending', 'confirmed', 'preparing', 'out_for_delivery'].includes(order.status)
        ).length;
        const availablePartners = partners.filter(partner => 
          partner.current_location === location.zone_name && partner.status === 'available'
        ).length;
        const revenue = zoneOrders.reduce((sum, order) => sum + (order.total_amount || 0), 0);
        const avgDeliveryFee = zoneOrders.length > 0 ? 
          zoneOrders.reduce((sum, order) => sum + (order.final_delivery_fee || 0), 0) / zoneOrders.length : 0;

        return {
          zone: location.zone_name,
          totalOrders: zoneOrders.length,
          activeOrders,
          availablePartners,
          revenue,
          currentSurge: location.current_surge_multiplier || 1.0,
          avgDeliveryFee: Math.round(avgDeliveryFee)
        };
      });

      // Hourly Orders (last 24 hours simulation)
      const hourlyOrders = Array.from({length: 24}, (_, i) => ({
        hour: `${23-i}:00`,
        orders: Math.floor(Math.random() * 20) + 5,
        avgSurge: (Math.random() * 1.5 + 0.8).toFixed(1)
      })).reverse();

      // Revenue data
      const revenueData = zoneStats.map(zone => ({
        zone: zone.zone,
        revenue: zone.revenue,
        deliveryRevenue: zone.totalOrders * zone.avgDeliveryFee
      }));

      setAnalyticsData({
        zoneStats,
        hourlyOrders,
        revenueData
      });
    } catch (error) {
      console.error("Error loading analytics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const totalRevenue = analyticsData.zoneStats.reduce((sum, zone) => sum + zone.revenue, 0);
  const totalOrders = analyticsData.zoneStats.reduce((sum, zone) => sum + zone.totalOrders, 0);
  const avgSurge = analyticsData.zoneStats.length > 0 ? 
    analyticsData.zoneStats.reduce((sum, zone) => sum + zone.currentSurge, 0) / analyticsData.zoneStats.length : 1.0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Live <span className="text-indigo-200">Analytics</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Real-time insights into surge pricing performance and operational metrics
            </p>
            
            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">Total Revenue</span>
                  </div>
                  <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-purple-300" />
                    <span className="font-semibold">Total Orders</span>
                  </div>
                  <p className="text-2xl font-bold">{totalOrders}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold">Avg Surge</span>
                  </div>
                  <p className="text-2xl font-bold">{avgSurge.toFixed(1)}x</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Zone Performance */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Zone Performance Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Zone Statistics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Current Zone Status</h3>
                <div className="space-y-3">
                  {analyticsData.zoneStats.map((zone) => (
                    <Card key={zone.zone} className="p-4 border-l-4 border-indigo-500">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">{zone.zone}</h4>
                        <Badge 
                          className={
                            zone.currentSurge >= 2.0 ? 'bg-red-500 text-white' :
                            zone.currentSurge >= 1.5 ? 'bg-orange-500 text-white' :
                            zone.currentSurge >= 1.2 ? 'bg-yellow-500 text-white' :
                            'bg-green-500 text-white'
                          }
                        >
                          {zone.currentSurge}x
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Total Orders</p>
                          <p className="font-bold">{zone.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Active Orders</p>
                          <p className="font-bold">{zone.activeOrders}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Available Partners</p>
                          <p className="font-bold">{zone.availablePartners}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Revenue</p>
                          <p className="font-bold">₹{zone.revenue.toLocaleString()}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Charts */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Orders by Zone</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.zoneStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="zone" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="totalOrders" fill="#6366f1" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hourly Trends */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                24-Hour Order Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData.hourlyOrders}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                Revenue Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsData.revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="zone" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#10b981" />
                  <Bar dataKey="deliveryRevenue" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Food Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Delivery Revenue</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Summary */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Orders</p>
                <p className="text-2xl font-bold">{totalOrders}</p>
              </div>
              <Activity className="w-8 h-8 text-blue-200" />
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Revenue</p>
                <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-200" />
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Avg Surge</p>
                <p className="text-2xl font-bold">{avgSurge.toFixed(1)}x</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-200" />
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Active Zones</p>
                <p className="text-2xl font-bold">{analyticsData.zoneStats.length}</p>
              </div>
              <MapPin className="w-8 h-8 text-orange-200" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}