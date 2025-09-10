import dns from 'dns'
dns.setDefaultResultOrder('verbatim')
import dotenv from "dotenv";
import app from "./app.js";
import { testConnection } from "./db/connection.js";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

const { PORT = 9090 } = process.env;

(async () => {
  try {
    await testConnection();
  } catch (err) {
    console.error('Database connection test failed:', err);
    // Optionally: return here if you want to block startup on DB failure
    // return;
  }

  app.listen(PORT, () => {
    console.log(
      `Listening on ${PORT}... ${new Date().toISOString()} ${process.env.NODE_ENV}`
    );
  });
})();

