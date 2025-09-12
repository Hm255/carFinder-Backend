import { Request, Response } from 'express';
import { fetchCars } from '../model/model.js';

export const getCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await fetchCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
