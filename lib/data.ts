import ordersData from '@/entities/Order.json';
import partnersData from '@/entities/DeliveryPartner.json';
import locationsData from '@/entities/Location.json';
import surgePoliciesData from '@/entities/SurgePolicy.json';
import { Order, DeliveryPartner, Location, SurgePolicy } from '@/types';

// Type safe data exports
export const orders: { orders: Order[] } = ordersData;
export const partners: { deliveryPartners: DeliveryPartner[] } = partnersData;
// Normalize/validate JSON at import time so TypeScript sees the correct shape
const normalizedLocations = {
    zones: (locationsData?.zones || []).map((z: any) => ({
        id: String(z.id),
        name: String(z.name),
        // ensure 'zone' exists; fallback to a slug of the name or empty string
        zone: z.zone ?? (typeof z.name === 'string' ? z.name.toLowerCase().replace(/\s+/g, '-') : ''),
        coordinates: {
            lat: Number(z.coordinates?.lat ?? 0),
            lng: Number(z.coordinates?.lng ?? 0)
        }
    }))
};

export const locations: { zones: Location[] } = normalizedLocations as { zones: Location[] };
export const surgePolicies: { policies: SurgePolicy[] } = surgePoliciesData;

// Helper functions
export function getAllOrders() {
    return orders.orders;
}

export function getOrderById(id: string) {
    return orders.orders.find(order => order.id === id);
}

export function getAllPartners() {
    return partners.deliveryPartners;
}

export function getPartnerById(id: string) {
    return partners.deliveryPartners.find(partner => partner.id === id);
}

export function getAllLocations() {
    return locations.zones;
}

export function getAllSurgePolicies() {
    return surgePolicies.policies;
}

export function getSurgePolicyById(id: string) {
    return surgePolicies.policies.find(policy => policy.id === id);
}