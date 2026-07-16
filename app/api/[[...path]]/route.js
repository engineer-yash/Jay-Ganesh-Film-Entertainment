import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

let cached = global._mongo;
if (!cached) cached = global._mongo = { conn: null };

async function getDb() {
  if (cached.conn) return cached.conn;
  if (!process.env.MONGO_URL) return null;
  try {
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    cached.conn = client.db(process.env.DB_NAME || 'jayganesh');
    return cached.conn;
  } catch (e) { return null; }
}

export async function GET(request, { params }) {
  const p = await params;
  const path = (p?.path || []).join('/');
  if (path === '' || path === 'health') return NextResponse.json({ ok: true, service: 'Jay Ganesh Films API' });
  return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
}

export async function POST(request, { params }) {
  const p = await params;
  const path = (p?.path || []).join('/');
  if (path === 'contact') {
    try {
      const body = await request.json();
      if (!body?.name || !body?.email || !body?.message) {
        return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
      }
      const db = await getDb();
      if (db) {
        await db.collection('contact_messages').insertOne({ ...body, createdAt: new Date() });
      }
      return NextResponse.json({ ok: true });
    } catch (e) {
      return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
    }
  }
  return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
}
