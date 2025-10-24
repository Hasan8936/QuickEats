import { NextResponse } from 'next/server'

// Simple in-memory sample stats per location (would come from real telemetry in production)
const sampleStats: Record<string, { activeOrders: number; availablePartners: number }> = {
  'Downtown': { activeOrders: 44, availablePartners: 7 },
  'Hazratganj': { activeOrders: 18, availablePartners: 6 },
  'Gomti Nagar': { activeOrders: 12, availablePartners: 5 },
  'Aliganj': { activeOrders: 6, availablePartners: 4 },
  'Kaiserbagh': { activeOrders: 9, availablePartners: 3 }
}

function computeSurge(activeOrders: number, availablePartners: number, maxMultiplier = 3.0) {
  if (availablePartners <= 0) return maxMultiplier
  const load = activeOrders / availablePartners // higher means more load
  // baseline load 1 => 1x
  // map load into multiplier using a smooth function
  const multiplier = Math.min(maxMultiplier, 1 + Math.log10(Math.max(1, load)) * 1.6)
  return Math.max(1, Number(multiplier.toFixed(2)))
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const location = url.searchParams.get('location') || 'Downtown'

    const stats = sampleStats[location] || { activeOrders: 5, availablePartners: 5 }
    const multiplier = computeSurge(stats.activeOrders, stats.availablePartners)

    return NextResponse.json({ location, multiplier, stats })
  } catch (err) {
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Accept manual updates to sample stats for demo purposes
    const { location, activeOrders, availablePartners } = body
    if (!location) return NextResponse.json({ error: 'missing location' }, { status: 400 })
    sampleStats[location] = { activeOrders: Number(activeOrders) || 0, availablePartners: Number(availablePartners) || 0 }
    const multiplier = computeSurge(sampleStats[location].activeOrders, sampleStats[location].availablePartners)
    return NextResponse.json({ location, multiplier, stats: sampleStats[location] })
  } catch (err) {
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}