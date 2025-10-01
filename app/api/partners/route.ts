import { NextResponse } from 'next/server';
import { getAllPartners, getPartnerById } from '@/lib/data';

export async function GET() {
  return NextResponse.json(getAllPartners());
}

export async function PATCH(request: Request) {
  try {
    const { partnerId, status } = await request.json();
    // In a real application, you would update this in a database
    // For now, we'll just return the update confirmation
    return NextResponse.json({ 
      message: `Partner ${partnerId} status updated to ${status}` 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update partner status' },
      { status: 400 }
    );
  }
}