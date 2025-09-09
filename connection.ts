import { Pool } from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { parse } from 'pg-connection-string';

const envDir = __dirname; 

const envName = process.env.NODE_ENV || 'development';
let envPath = path.join(envDir, `.env.${envName}`);

if (!fs.existsSync(envPath)) {
  console.warn(`⚠️  ${envPath} not found. Trying .env.production...`);
  envPath = path.join(envDir, '.env.production');
}

if (!fs.existsSync(envPath)) {
  console.warn(`⚠️  .env.production not found. Trying .env...`);
  envPath = path.join(envDir, '.env');
}

if (!fs.existsSync(envPath)) {
  throw new Error(`❌ No .env file found in ${envDir}`);
}

dotenv.config({ path: envPath });
console.log(`✅ Loaded environment variables from ${envPath}`);

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL not set in environment variables');
}

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
  max: isProduction ? 2 : undefined
});

export async function testConnection() {
  try {
    const res = await pool.query<{ now: string }>('SELECT NOW()');
    const parsed = parse(process.env.DATABASE_URL!);
    console.log(`✅ Connected to ${parsed.database} at ${parsed.host} — ${res.rows[0].now}`);
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  }
}

export default pool;
