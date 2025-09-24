import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MapPin, Clock, User } from "lucide-react";

export default function OrderAssignment({ orders, partners, selectedPartner, onAssignOrder }) {
  const availablePartners = partners.filter(p => p.status === 'available');

  return (
    <div className="space-y-6">
      {/* Available Orders */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Orders Ready for Pickup ({orders.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {orders.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No orders pending assignment</p>
          ) : (
            <div className="space-y-4">
              {orders.slice(0, 5).map((order) => (
                <Card key={order.id} className="border">
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
                        <Badge className="bg-blue-100 text-blue-800">
                          ₹{order.total_amount}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-3 h-3" />
                          <span>{order.delivery_zone}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-3 h-3" />
                          <span>{order.estimated_delivery_time} mins</span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        {order.items?.length || 0} items • Surge: {order.surge_multiplier}x
                      </div>

                      {selectedPartner && selectedPartner.status === 'available' && (
                        <Button
                          size="sm"
                          className="w-full bg-green-500 hover:bg-green-600"
                          onClick={() => onAssignOrder(order.id, selectedPartner.id)}
                        >
                          Assign to {selectedPartner.name}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Selected Partner Info */}
      {selectedPartner && (
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Selected Partner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">{selectedPartner.name}</h3>
                <p className="text-sm text-gray-600">{selectedPartner.phone}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{selectedPartner.current_location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  <Badge className={
                    selectedPartner.status === 'available' ? 'bg-green-500 text-white' :
                    selectedPartner.status === 'busy' ? 'bg-orange-500 text-white' :
                    'bg-gray-500 text-white'
                  }>
                    {selectedPartner.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-gray-500">Active Orders</p>
                  <p className="font-medium">{selectedPartner.active_orders || 0}</p>
                </div>
                <div>
                  <p className="text-gray-500">Rating</p>
                  <p className="font-medium">{selectedPartner.rating} ⭐</p>
                </div>
              </div>
              
              {selectedPartner.status !== 'available' && (
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-700">
                    Partner is currently {selectedPartner.status}. 
                    Change status to available to assign orders.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Available Partners</span>
              <span className="font-medium">{availablePartners.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Pending Orders</span>
              <span className="font-medium">{orders.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Orders per Partner</span>
              <span className="font-medium">
                {availablePartners.length > 0 ? (orders.length / availablePartners.length).toFixed(1) : 0}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}