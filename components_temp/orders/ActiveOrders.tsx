import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User } from "lucide-react";
import { Order } from "@/types/index";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  preparing: "bg-purple-100 text-purple-800",
  out_for_delivery: "bg-orange-100 text-orange-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800"
};

interface ActiveOrdersProps {
  orders: Order[];
}

export default function ActiveOrders({ orders }: ActiveOrdersProps) {
  const recentOrders = orders.slice(0, 6);

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {recentOrders.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No orders yet</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentOrders.map((order) => (
              <Card key={order.id} className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {order.customer_name}
                        </h4>
                        <p className="text-sm text-gray-600">{order.customer_phone}</p>
                      </div>
                      <Badge className={STATUS_COLORS[order.status]}>
                        {order.status?.replace(/_/g, " ")}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{order.delivery_zone}</span>
                      </div>

                      {order.estimated_delivery_time && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-3 h-3" />
                          <span>{order.estimated_delivery_time} mins</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm text-gray-600">
                        {order.items?.length || 0} items
                      </span>
                      <span className="font-bold">₹{order.total_amount}</span>
                    </div>

                    {order.surge_multiplier !== 1.0 && (
                      <Badge variant="outline" className="text-xs">
                        {order.surge_multiplier}x Surge Applied
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
