"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { config } = require('dotenv');
const pg_1 = require("pg");
const ENV = process.env.NODE_ENV || 'testt';
require('dotenv').config({
    path: `${__dirname}/../.env.${ENV}`,
});
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'carFinder',
    password: process.env.DB_PASSWORD,
    port: 5432,
});
if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
    throw new Error('PGDATABASE/DB_URL not set');
}
exports.default = pool;
