import ordersData from '../Entities/Order.json';
import partnersData from '../Entities/DeliveryPartner.json';
import locationsData from '../Entities/Location.json';
import surgePoliciesData from '../Entities/SurgePolicy.json';
import { Order, DeliveryPartner, Location, SurgePolicy } from '@/types';

// Type safe data exports
export const orders: { orders: Order[] } = ordersData;
export const partners: { deliveryPartners: DeliveryPartner[] } = partnersData;
export const locations: { zones: Location[] } = locationsData;
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