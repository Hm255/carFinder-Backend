import pool from './connection.js'; // Import the connection pool
export const seedDatabase = async (withinTest = false) => {
    let client;
    try {
        client = await pool.connect();
        await client.query('BEGIN');
        await client.query('SET CONSTRAINTS ALL DEFERRED;');
        await client.query('TRUNCATE TABLE cars RESTART IDENTITY CASCADE;');
        await client.query('TRUNCATE TABLE carmodels RESTART IDENTITY CASCADE;');
        await client.query('TRUNCATE TABLE carmakes RESTART IDENTITY CASCADE;');
        await client.query('TRUNCATE TABLE fueltypes RESTART IDENTITY CASCADE;');
        await client.query('TRUNCATE TABLE taxstatuses RESTART IDENTITY CASCADE;');
        await client.query('TRUNCATE TABLE wheelplans RESTART IDENTITY CASCADE;');
        const carmakesData = [
            { make_id: 1, make_name: 'Tesla' },
            { make_id: 2, make_name: 'Ford' },
            { make_id: 3, make_name: 'Volkswagen' },
            { make_id: 4, make_name: 'BMW' },
            { make_id: 5, make_name: 'Audi' },
            { make_id: 6, make_name: 'Nissan' },
        ];
        for (const make of carmakesData) {
            await client.query(`INSERT INTO carmakes (make_id, make_name) VALUES ($1, $2);`, [make.make_id, make.make_name]);
        }
        const carmodelsData = [
            { model_id: 1, model_name: 'Model Y long range AWD', make_id: 1 },
            { model_id: 2, model_name: 'GT40', make_id: 2 },
            { model_id: 3, model_name: 'Golf R32', make_id: 3 },
            { model_id: 4, model_name: 'M3 CSL', make_id: 4 },
            { model_id: 5, model_name: 'Auto Union V16 Streamline', make_id: 5 },
            { model_id: 6, model_name: 'Skyline GTR (R34)', make_id: 6 },
            { model_id: 7, model_name: 'Model Y Performance', make_id: 1 },
        ];
        for (const model of carmodelsData) {
            await client.query(`INSERT INTO carmodels (model_id, model_name, make_id) VALUES ($1, $2, $3);`, [model.model_id, model.model_name, model.make_id]);
        }
        const fueltypesData = [
            { fuel_type_id: 1, fuel_type_name: 'ELECTRICITY' },
            { fuel_type_id: 2, fuel_type_name: 'PETROL' },
            { fuel_type_id: 3, fuel_type_name: 'DIESEL' },
        ];
        for (const fuel of fueltypesData) {
            await client.query(`INSERT INTO fueltypes (fuel_type_id, fuel_type_name) VALUES ($1, $2);`, [fuel.fuel_type_id, fuel.fuel_type_name]);
        }
        const taxstatusesData = [
            { tax_status_id: 1, tax_status_name: 'Yes' },
            { tax_status_id: 0, tax_status_name: 'No' },
        ];
        for (const taxStatus of taxstatusesData) {
            await client.query(`INSERT INTO taxstatuses (tax_status_id, tax_status_name) VALUES ($1, $2);`, [taxStatus.tax_status_id, taxStatus.tax_status_name]);
        }
        const wheelplansData = [
            { wheel_plan_id: 1, wheel_plan_name: '2 WHEEL' },
            { wheel_plan_id: 2, wheel_plan_name: '3 WHEEL' },
            { wheel_plan_id: 3, wheel_plan_name: '2 AXLE RIGID BODY' },
            { wheel_plan_id: 4, wheel_plan_name: '3 AXLE RIGID BODY' },
            { wheel_plan_id: 5, wheel_plan_name: '4 AXLE RIGID BODY' },
            { wheel_plan_id: 6, wheel_plan_name: '2 AXLE ARTICULATED' },
            { wheel_plan_id: 7, wheel_plan_name: '3 AXLE ARTICULATED' },
            { wheel_plan_id: 8, wheel_plan_name: '4 AXLE ARTICULATED' },
            { wheel_plan_id: 9, wheel_plan_name: '3 WHEEL DRIVE' },
            { wheel_plan_id: 10, wheel_plan_name: '4 WHEEL DRIVE' },
            { wheel_plan_id: 11, wheel_plan_name: 'ALL WHEEL DRIVE' },
            { wheel_plan_id: 12, wheel_plan_name: '6 WHEEL' },
            { wheel_plan_id: 13, wheel_plan_name: '6 WHEEL DRAWBAR' },
            { wheel_plan_id: 14, wheel_plan_name: '8 WHEEL RIGID BODY' },
            { wheel_plan_id: 15, wheel_plan_name: 'LEFT-HAND DRIVE' },
            { wheel_plan_id: 16, wheel_plan_name: 'QUADRICYCLE' },
            { wheel_plan_id: 17, wheel_plan_name: 'TRAILER' },
            { wheel_plan_id: 18, wheel_plan_name: 'SEMI-TRAILER' },
            { wheel_plan_id: 19, wheel_plan_name: 'TRACTOR UNIT' },
            { wheel_plan_id: 20, wheel_plan_name: 'OTHER' },
        ];
        for (const wheelPlan of wheelplansData) {
            await client.query(`INSERT INTO wheelplans (wheel_plan_id, wheel_plan_name) VALUES ($1, $2);`, [wheelPlan.wheel_plan_id, wheelPlan.wheel_plan_name]);
        }
        const carsData = [
            {
                registration_number: 'TESLA12',
                make_id: 1,
                model_id: 1,
                color: 'White',
                engine_size: 0,
                year_of_manufacture: 2023,
                date_of_manufacture: '2023-07-15',
                co2_emissions: 0,
                tax_due_date: '2024-07-15',
                date_of_last_v5c_issued: '2023-07-15',
                first_used_date: '2023-07-15',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'M1',
                fuel_type_id: 1,
                tax_status_id: 1,
                wheel_plan_id: 11,
                power_output: 384,
                price: 40000
            },
            {
                registration_number: 'GT40FRD',
                make_id: 2,
                model_id: 2,
                color: 'Blue',
                engine_size: 1500,
                year_of_manufacture: 1966,
                date_of_manufacture: '1966-05-12',
                co2_emissions: 120,
                tax_due_date: '2024-10-01',
                date_of_last_v5c_issued: '2023-03-20',
                first_used_date: '1966-06-12',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'EU6',
                fuel_type_id: 2,
                tax_status_id: 1,
                wheel_plan_id: 3,
                power_output: 450,
                price: 2500000
            },
            {
                registration_number: 'AU21JKL',
                make_id: 3,
                model_id: 3,
                color: 'Grey',
                engine_size: 2000,
                year_of_manufacture: 2004,
                date_of_manufacture: '2004-03-01',
                co2_emissions: 130,
                tax_due_date: '2004-04-01',
                date_of_last_v5c_issued: '2004-11-15',
                first_used_date: '2004-03-15',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'EU6d',
                fuel_type_id: 3,
                tax_status_id: 1,
                wheel_plan_id: 3,
                power_output: 280,
                price: 15000
            },
            {
                registration_number: 'BT70MNO',
                make_id: 4,
                model_id: 4,
                color: 'White',
                engine_size: 2000,
                year_of_manufacture: 2003,
                date_of_manufacture: '2003-07-10',
                co2_emissions: 145,
                tax_due_date: '2003-08-01',
                date_of_last_v5c_issued: '2023-07-10',
                first_used_date: '2020-07-15',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'EU6d-TEMP',
                fuel_type_id: 2,
                tax_status_id: 1,
                wheel_plan_id: 3,
                power_output: 400,
                price: 80000
            },
            {
                registration_number: 'VE16AUD',
                make_id: 5,
                model_id: 5,
                color: 'Silver',
                engine_size: 6000,
                year_of_manufacture: 1937,
                date_of_manufacture: '1937-02-20',
                co2_emissions: 1100,
                tax_due_date: '1944-03-01',
                date_of_last_v5c_issued: '2007-09-10',
                first_used_date: '1937-03-15',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'EU6',
                fuel_type_id: 3,
                tax_status_id: 1,
                wheel_plan_id: 3,
                power_output: 520,
                price: 1200000000
            },
            {
                registration_number: 'DX71STU',
                make_id: 6,
                model_id: 6,
                color: 'Sky blue',
                engine_size: 1300,
                year_of_manufacture: 2021,
                date_of_manufacture: '1999-11-05',
                co2_emissions: 125,
                tax_due_date: '2024-12-01',
                date_of_last_v5c_issued: '2023-07-22',
                first_used_date: '2021-12-10',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'EU6d',
                fuel_type_id: 2,
                tax_status_id: 1,
                wheel_plan_id: 3,
                power_output: 276,
                price: 110000
            },
            {
                registration_number: 'TESLA11',
                make_id: 1,
                model_id: 7,
                color: 'Red',
                engine_size: 0,
                year_of_manufacture: 2023,
                date_of_manufacture: '2023-07-15',
                co2_emissions: 0,
                tax_due_date: '2024-07-15',
                date_of_last_v5c_issued: '2023-07-15',
                first_used_date: '2023-07-15',
                marked_for_export: false,
                has_outstanding_recall: false,
                type_approval: 'M1',
                fuel_type_id: 1,
                tax_status_id: 1,
                wheel_plan_id: 11,
                power_output: 426,
                price: 60000
            }
        ];
        for (const car of carsData) {
            await client.query(`INSERT INTO cars (
            registration_number,
            make_id,
            model_id,
            color,
            engine_size,
            year_of_manufacture,
            date_of_manufacture,
            co2_emissions,
            tax_due_date, 
            date_of_last_v5c_issued,
            first_used_date,
            marked_for_export, 
            has_outstanding_recall,
            type_approval,
            fuel_type_id, 
            tax_status_id,
            wheel_plan_id,
            power_output,
            price
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15, $16, $17, $18, $19
          );`, [
                car.registration_number,
                car.make_id,
                car.model_id,
                car.color,
                car.engine_size,
                car.year_of_manufacture,
                car.date_of_manufacture,
                car.co2_emissions,
                car.tax_due_date,
                car.date_of_last_v5c_issued,
                car.first_used_date,
                car.marked_for_export,
                car.has_outstanding_recall,
                car.type_approval,
                car.fuel_type_id,
                car.tax_status_id,
                car.wheel_plan_id,
                car.power_output,
                car.price
            ]);
        }
        await client.query('COMMIT');
        console.log('Database seeded successfully!');
    }
    catch (error) {
        console.error('Error seeding the database:', error);
        if (client) {
            await client.query('ROLLBACK');
        }
        throw error;
    }
    finally {
        if (client) {
            client.release();
        }
        if (!withinTest) {
            console.log("This is not a test");
            await pool.end();
        }
    }
};
