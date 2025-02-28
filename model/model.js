import db from '../db/connection.js';
export const fetchCars = async () => {
    const query = `
    SELECT
      c.registration_number,
      c.make_id,
      c.model_id,
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
      c.fuel_type_id,
      c.tax_status_id,
      c.wheel_plan_id,
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
    const { rows } = await db.query(query);
    console.log(rows);
    return rows;
};
