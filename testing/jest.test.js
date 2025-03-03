"use strict";
//this doesn't work
const request = require('supertest');
const app = require('../app'); // potential extra?
const pool = require('../db/connection');
const { seedDatabase } = require('../db/seed');
const { typeof: Car } = require('../model/model');
beforeEach(async () => {
    await seedDatabase();
});
afterAll(async () => {
    // Close the database pool after all tests have been run to stop leaks
    await pool.end();
});
describe('GET /cars', () => {
    it('should return a list of cars with complete details, including the date', async () => {
        const response = await request(app).get('/cars');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('cars');
        expect(Array.isArray(response.body.cars)).toBe(true);
        // Since we have only one car in the seed data
        expect(response.body.cars.length).toBe(1);
        const car = response.body.cars[0];
        // Define the expected car data
        const expectedCar = {
            registration_number: 'TESLA12',
            color: 'White',
            engine_size: 0,
            year_of_manufacture: 2023,
            date_of_manufacture: new Date('2023-07-15'),
            co2_emissions: 0,
            tax_due_date: new Date('2024-07-15'),
            date_of_last_v5c_issued: new Date('2023-07-15'),
            first_used_date: new Date('2023-07-15'),
            marked_for_export: false,
            has_outstanding_recall: false,
            type_approval: 'M1',
            power_output: 384,
            make: 'Tesla',
            model: 'Tesla Model Y long range AWD',
            fuel_type: 'ELECTRICITY',
            tax_status: 'Yes',
            wheel_plan: 'ALL WHEEL DRIVE',
        };
        // Assert that the car data matches the expected data
        expect(car).toEqual(expectedCar);
    });
});
