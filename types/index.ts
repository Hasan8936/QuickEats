export interface MenuItem {
  name: string;
  price: number;
  quantity?: number;
  rating?: number;
  time?: string;
  veg?: boolean;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  status: string;
  delivery_zone: string;
  items: MenuItem[];
  total_amount: number;
  surge_multiplier: number;
  estimated_delivery_time?: number;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  phone: string;
  vehicle_type: string;
  current_location: string;
  status: string;
  active_orders: number;
  rating: number;
}

export interface Location {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SurgePolicy {
  id: string;
  zone_name: string;
  demand_threshold_low: number;
  demand_threshold_high: number;
  supply_threshold_low: number;
  max_surge_multiplier: number;
  active: boolean;
}
