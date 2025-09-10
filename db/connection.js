import { Pool } from 'pg';
import dotenv from 'dotenv';
import { parse } from 'pg-connection-string';
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
}
if (!process.env.DATABASE_URL) {
    throw new Error('❌ DATABASE_URL not set in environment variables');
}
const isProduction = process.env.NODE_ENV === 'production';
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
    max: isProduction ? 5 : undefined
});
export async function testConnection() {
    const res = await pool.query('SELECT NOW()');
    const parsed = parse(process.env.DATABASE_URL);
    console.log(`✅ Connected to ${parsed.database} at ${parsed.host}:${parsed.port} — ${res.rows[0].now}`);
}
export default pool;
