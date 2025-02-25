import express, {Request, Response} from "express";
import { fetchCars, Car } from '../model/model';

export const getCars = (req: Request, res: Response): void => {
    fetchCars()
      .then((cars: Car[]) => {
        res.status(200).json({ cars });
      })
      .catch((error: Error) => {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Failed to fetch cars.' });
      });
  };
  

const app = express();
export default app;
