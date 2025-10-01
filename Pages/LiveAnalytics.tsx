import React from 'react';
import { getAllOrders, getAllPartners } from '@/lib/data';
import { Order, DeliveryPartner } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function LiveAnalytics() {
  const orders = getAllOrders();
  const partners = getAllPartners();

  // Calculate analytics data
  const analyticsData = {
    totalOrders: orders.length,
    activePartners: partners.filter(p => p.status === 'available').length,
    avgDeliveryTime: orders.reduce((acc, order) => acc + (order.estimated_delivery_time || 0), 0) / orders.length || 0,
    surgeZones: orders.filter(order => (order.surge_multiplier || 1) > 1).length,
  };

  // Prepare chart data
  const ordersByHour = Array.from({ length: 24 }, (_, hour) => ({
    hour: `${hour}:00`,
    orders: Math.floor(Math.random() * 20), // Simulated data
    partners: Math.floor(Math.random() * 10), // Simulated data
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Live Analytics</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.totalOrders}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Active Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.activePartners}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Avg Delivery Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.avgDeliveryTime.toFixed(0)} min</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Surge Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.surgeZones}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Orders by Hour</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={ordersByHour}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Partner Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={ordersByHour}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="partners" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}