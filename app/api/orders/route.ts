import { NextResponse } from 'next/server';
import { getAllOrders, getOrderById } from '@/lib/data';
import { type Order } from '@/types';

export async function GET() {
  return NextResponse.json(getAllOrders());
}

export async function POST(request: Request) {
  try {
    const newOrder: Order = await request.json();
    // In a real application, you would save this to a database
    // For now, we'll just return the received order
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 400 }
    );
  }
}