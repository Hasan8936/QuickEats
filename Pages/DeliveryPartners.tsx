import React from 'react';
import { getAllPartners } from '@/lib/data';
import { DeliveryPartner } from '@/types';
import PartnerCard from "@/components/partners/PartnerCard";
import OrderAssignment from "@/components/partners/OrderAssignment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DeliveryPartners() {
  const partners = getAllPartners();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Delivery Partners</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Partners */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {partners.map((partner) => (
                  <PartnerCard 
                    key={partner.id} 
                    partner={partner}
                    onStatusUpdate={() => {}}
                    onSelect={() => {}}
                    isSelected={false}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Assignment */}
        <OrderAssignment 
          partners={partners}
          orders={[]}
          selectedPartner={null}
          onAssignOrder={() => {}}
        />
      </div>
    </div>
  );
}