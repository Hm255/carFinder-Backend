import dotenv from 'dotenv';
import app from './app.js';
import { testConnection } from './db/connection.js';
dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});
const { PORT = 9090, NODE_ENV } = process.env;
(async () => {
    if (NODE_ENV !== 'production') {
        try {
            await testConnection();
        }
        catch (err) {
            console.error('Database connection test failed:', err);
        }
    }
    else {
        console.log('Skipping DB connection test in production to avoid Supabase pool warnings.');
    }
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}... ${new Date().toISOString()} (${NODE_ENV})`);
    });
})();
