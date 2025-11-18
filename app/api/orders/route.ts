import { NextResponse } from 'next/server'
// This route demonstrates how orders could be saved to a PostgreSQL DB using the `pg` package.
// NOTE: This code requires the `pg` package and a valid DATABASE_URL environment variable.

import { Client } from 'pg'

async function getClient() {
  const conn = process.env.DATABASE_URL
  if (!conn) throw new Error('DATABASE_URL not configured')
  const client = new Client({ connectionString: conn })
  await client.connect()
  return client
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customer_name, items, total, location } = body
    const client = await getClient()

    const res = await client.query(
      `INSERT INTO orders (customer_name, items, total, location, created_at)
       VALUES ($1, $2, $3, $4, NOW()) RETURNING id`,
      [customer_name || 'guest', JSON.stringify(items || []), total || 0, location || null]
    )
    await client.end()

    return NextResponse.json({ ok: true, id: res.rows[0].id })
  } catch (err: any) {
    console.error('orders POST error', err?.message || err)
    return NextResponse.json({ ok: false, error: err?.message || 'failed' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await getClient()
    const res = await client.query('SELECT id, customer_name, total, location, created_at FROM orders ORDER BY created_at DESC LIMIT 50')
    await client.end()
    return NextResponse.json({ ok: true, orders: res.rows })
  } catch (err: any) {
    console.error('orders GET error', err?.message || err)
    return NextResponse.json({ ok: false, error: err?.message || 'failed' }, { status: 500 })
  }
}
