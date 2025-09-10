import dotenv from 'dotenv';
import app from './app.js';
import { testConnection } from './db/connection.js';


if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
}

const { PORT = 9090, NODE_ENV } = process.env;

(async () => {
  try {
    await testConnection();
  } catch (err) {
    console.error('Database connection test failed:', err);
  }

  app.listen(PORT, () => {
    console.log(
      `🚀 Server running in ${NODE_ENV} mode on port ${PORT} — ${new Date().toISOString()}`
    );
  });
})();
