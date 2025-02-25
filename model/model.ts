import db from '../db/connection.js';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

export const fetchCars = async (): Promise<Car[]> => {
  try {
    const { rows }: { rows: Car[] } = await db.query('SELECT * FROM cars');
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error; // Rethrow the error after logging it
  }
};
