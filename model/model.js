import db from '../db/connection.js';
export const fetchCars = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM cars');
        return rows;
    }
    catch (error) {
        console.error('Error executing query:', error);
        throw error; // Rethrow the error after logging it
    }
};
