import pg from 'pg';

const { Pool } = pg;

//postgres credentials go here
const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'postgres',
  database: 'carFinder',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
