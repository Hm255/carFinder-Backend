import { fetchCars } from '../model/model.js';
export const getCars = async (req, res) => {
    try {
        const cars = await fetchCars();
        res.json(cars);
    }
    catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
