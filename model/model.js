import db from '../db/connection.js';
export const fetchCars = async () => {
    const { rows } = await db.query('SELECT * FROM cars');
    console.log(rows);
    return rows;
};
