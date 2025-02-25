// scripts/seed.ts
import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function seedDatabase() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    await client.connect();
    console.log('Connected to the database.');

    // Clear existing data (optional)
    await client.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE;');
    console.log('Cleared existing data.');

    // Insert new seed data
    const insertQuery = `
      INSERT INTO users (name, email, password)
      VALUES 
        ('Alice', 'alice@example.com', 'password123'),
        ('Bob', 'bob@example.com', 'securepass'),
        ('Charlie', 'charlie@example.com', 'qwerty');
    `;

    await client.query(insertQuery);
    console.log('Inserted seed data.');

  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

seedDatabase();
