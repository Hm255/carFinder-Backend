import express from 'express';
// Adjust the path as necessary
import { getCars } from './controller/controller.js';
import cors from 'cors';
const app = express();
app.use(cors()); //cross origin resource sharing, this will allow my application to communicate between backend and frontend
app.use(express.json());
app.get('/api/cars', getCars);
// Catch-all route
app.all('/*', (req, res) => {
    res.status(404).send({ msg: 'Item does not exist' });
});
// Error-handling middleware for PostgreSQL errors
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
// Generic error-handling middleware
app.use((err, req, res, next) => {
    res.status(500).send({ msg: "Something went wrong" });
});
export default app;
