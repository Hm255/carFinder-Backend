import express from "express";
import { fetchCars } from '../model/model';
export const getCars = (req, res) => {
    fetchCars()
        .then((cars) => {
        res.status(200).json({ cars });
    })
        .catch((error) => {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Failed to fetch cars.' });
    });
};
const app = express();
export default app;
