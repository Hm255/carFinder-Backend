import express from 'express';
import { getCars } from './controller/controller.js';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/cars', getCars);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});
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
    console.error(err);
    res.status(500).send({ msg: "Something went wrong" });
});
export default app;
