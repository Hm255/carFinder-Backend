import dns from 'dns';
dns.setDefaultResultOrder('verbatim');
import dotenv from "dotenv";
import app from "../app.js";
import { testConnection } from "./connection.js";
dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});
const { PORT = 9090 } = process.env;
(async () => {
    await testConnection();
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}... ${new Date().toISOString()} ${process.env.NODE_ENV}`);
    });
    console.log(`${new Date().toISOString()} ${process.env.NODE_ENV} ${process.env.PORT || PORT}`);
})();
