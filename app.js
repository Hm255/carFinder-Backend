// backend/app.ts
import express from 'express';
import { getCars } from './controller/controller.js'; // Correct relative path
import cors from 'cors';
import path from 'path';
const app = express();
app.use(cors());
app.use(express.json());
// --- API Routes ---
app.get('/cars', getCars);
// --- Serve Static Files (Frontend) ---
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/public'))); // Serve from frontend/public
// --- Catch-all Route for SPA ---
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Serve index.html
});
// --- Error Handling ---
app.all('/*', (req, res) => {
    res.status(404).send({ msg: 'Item does not exist' });
});
// PostgreSQL error handling
app.use((err, req, res, next) => {
    if (err.code === '22P02') {
        res.status(400).send({ msg: "Invalid type (type is wrong)" });
    }
    else if (err.code === '22003') {
        res.status(404).send({ msg: "Item does not exist, psql (error 22003)" });
    }
    else if (err.code === '23502') {
        res.status(404).send({ msg: "Item does not exist (error 23502)" });
    }
    else {
        next(err);
    }
});
// server error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Log the error to the console
    res.status(500).send({ msg: "Something went wrong" });
});
export default app;
