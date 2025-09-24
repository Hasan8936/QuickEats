export interface Order {
  id: string | number;
  customer_name: string;
  customer_phone: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  delivery_zone: string;
  estimated_delivery_time?: number;
  items?: { name: string; quantity: number; price: number }[];
  total_amount: number;
  surge_multiplier?: number;
}
