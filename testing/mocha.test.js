import * as chai from 'chai';
import request from 'supertest';
import app from '../app.js';
import { seedDatabase } from '../db/seed.js';
import { describe, it, beforeEach } from 'mocha';
const { expect } = chai;
beforeEach(async () => {
    await seedDatabase(true);
});
describe('GET /cars', () => {
    it('should return a list of cars with complete details, including the date', async () => {
        const response = await request(app).get('/cars');
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.property('cars');
        expect(response.body.cars).to.be.an('array');
        expect(response.body.cars.length).to.equal(1);
        const car = response.body.cars[0];
        console.log(car);
        const expectedCar = {
            registration_number: 'TESLA12',
            color: 'White',
            engine_size: 0,
            year_of_manufacture: 2023,
            date_of_manufacture: new Date('2023-07-15').toString(),
            co2_emissions: 0,
            tax_due_date: new Date('2024-07-15').toString(),
            date_of_last_v5c_issued: new Date('2023-07-15').toString(),
            first_used_date: new Date('2023-07-15').toString(),
            marked_for_export: false,
            has_outstanding_recall: false,
            type_approval: 'M1',
            power_output: 384,
            price: 40000,
            make: 'Tesla',
            model: 'Tesla Model Y long range AWD',
            fuel_type: 'ELECTRICITY',
            tax_status: 'Yes',
            wheel_plan: 'ALL WHEEL DRIVE',
        };
        expect(car).to.deep.equal(expectedCar);
    });
});
