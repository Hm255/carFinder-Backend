import dotenv from 'dotenv';
import app from './app.js';
import { testConnection } from './db/connection.js';


if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
}

const { PORT = 9090, NODE_ENV } = process.env;

(async () => {
  await testConnection();
  app.listen(PORT);
})();


