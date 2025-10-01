import { NextResponse } from 'next/server';
import { getAllSurgePolicies, getSurgePolicyById } from '@/lib/data';

export async function GET() {
  return NextResponse.json(getAllSurgePolicies());
}

export async function POST(request: Request) {
  try {
    const { zoneId, multiplier } = await request.json();
    // In a real application, you would save this to a database
    // For now, we'll just return the received surge update
    return NextResponse.json({ 
      message: `Surge pricing updated for zone ${zoneId} to ${multiplier}x` 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update surge pricing' },
      { status: 400 }
    );
  }
}