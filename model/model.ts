import db from '../db/connection.js';

// models/carModel.ts

interface Car {
  registration_number: string; // character(7)
  make_id: number; // integer
  model_id: number; // integer
  color: string; // character varying(30)
  engine_size: number; // integer
  year_of_manufacture: number; // integer
  date_of_manufacture: Date; // date
  co2_emissions: number; // integer
  tax_due_date: Date; // date
  date_of_last_v5c_issued: Date; // date
  first_used_date: Date; // date
  marked_for_export: boolean; // boolean
  has_outstanding_recall: boolean; // boolean
  type_approval: string; // character varying(10)
  fuel_type_id: number; // integer
  tax_status_id: number; // integer
  wheel_plan_id: number; // integer
  power_output: number; // integer
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
