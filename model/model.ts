import db from '../db/connection.js';

//psql types given below next to columns for ease of picturing the cars table properties

export interface Car {
  registration_number: string;     // character(7)
  color: string;                   // character varying(30)
  engine_size: number;             // integer
  year_of_manufacture: number;     // integer
  date_of_manufacture: string;       // date
  co2_emissions: number;           // integer
  tax_due_date: string;              // date
  date_of_last_v5c_issued: string;   // date
  first_used_date: string;           // date
  marked_for_export: boolean;      // boolean
  has_outstanding_recall: boolean; // boolean
  type_approval: string;           // character varying(10)
  power_output: number;            // integer
  price: number;                   // integer or decimal, depending on your schema
  make: string;                    // Make name
  model: string;                   // Model name
  fuel_type: string;               // Fuel type name
  tax_status: string;              // Tax status name
  wheel_plan: string;              // Wheel plan name
}


export const fetchCars = async (): Promise<Car[]> => {
  const query = `
    SELECT
      c.registration_number,
      c.color,
      c.engine_size,
      c.year_of_manufacture,
      c.date_of_manufacture,
      c.co2_emissions,
      c.tax_due_date,
      c.date_of_last_v5c_issued,
      c.first_used_date,
      c.marked_for_export,
      c.has_outstanding_recall,
      c.type_approval,
      c.power_output,
      c.price,
      cm.make_name AS make,
      cmd.model_name AS model,
      ft.fuel_type_name AS fuel_type,
      ts.tax_status_name AS tax_status,
      wp.wheel_plan_name AS wheel_plan
    FROM
      cars c
      LEFT JOIN carmakes cm ON c.make_id = cm.make_id
      LEFT JOIN carmodels cmd ON c.model_id = cmd.model_id
      LEFT JOIN fueltypes ft ON c.fuel_type_id = ft.fuel_type_id
      LEFT JOIN taxstatuses ts ON c.tax_status_id = ts.tax_status_id
      LEFT JOIN wheelplans wp ON c.wheel_plan_id = wp.wheel_plan_id;
  `;
  const { rows }: { rows: Car[] } = await db.query(query);
  return rows;
};
