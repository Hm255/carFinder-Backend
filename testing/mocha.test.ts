import * as chai from 'chai';
import request from 'supertest';
import app from '../app.js';
import { seedDatabase } from '../db/seed.js';
import type { Car } from '../model/model.js';
import { describe, it, beforeEach } from 'mocha';

const { expect } = chai;

beforeEach(async () => {
  await seedDatabase(true);
});

describe('GET /api/cars', () => {
  it('should return a list of cars with complete details', async () => {
    const response = await request(app).get('/cars');

    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body.length).to.equal(7);

    const expectedCars: Car[] = [
      {
        registration_number: 'TESLA12',
        color: 'White',
        engine_size: 0,
        year_of_manufacture: 2023,
        date_of_manufacture: '2023-07-14T23:00:00.000Z', 
        co2_emissions: 0,
        tax_due_date: '2024-07-14T23:00:00.000Z', 
        date_of_last_v5c_issued: '2023-07-14T23:00:00.000Z', 
        first_used_date: '2023-07-14T23:00:00.000Z', 
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'M1',
        power_output: 384,
        price: 40000,
        make: 'Tesla',
        model: 'Model Y long range AWD',
        fuel_type: 'ELECTRICITY',
        tax_status: 'Yes',
        wheel_plan: 'ALL WHEEL DRIVE'
      },
      {
        registration_number: 'GT40FRD',
        color: 'Blue',
        engine_size: 1500,
        year_of_manufacture: 1966,
        date_of_manufacture: '1966-05-11T23:00:00.000Z', 
        co2_emissions: 120,
        tax_due_date: '2024-09-30T23:00:00.000Z', 
        date_of_last_v5c_issued: '2023-03-20T00:00:00.000Z', 
        first_used_date: '1966-06-11T23:00:00.000Z', 
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'EU6',
        power_output: 450,
        price: 2500000,
        make: 'Ford',
        model: 'GT40',
        fuel_type: 'PETROL',
        tax_status: 'Yes',
        wheel_plan: '2 AXLE RIGID BODY'
      },
      {
        registration_number: 'AU21JKL',
        color: 'Grey',
        engine_size: 2000,
        year_of_manufacture: 2004,
        date_of_manufacture: '2004-03-01T00:00:00.000Z', 
        co2_emissions: 130,
        tax_due_date: '2004-03-31T23:00:00.000Z', 
        date_of_last_v5c_issued: '2004-11-15T00:00:00.000Z', 
        first_used_date: '2004-03-15T00:00:00.000Z', 
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'EU6d',
        power_output: 280,
        price: 15000,
        make: 'Volkswagen',
        model: 'Golf R32',
        fuel_type: 'DIESEL',
        tax_status: 'Yes',
        wheel_plan: '2 AXLE RIGID BODY'
      },
      {
        registration_number: 'BT70MNO',
        color: 'White',
        engine_size: 2000,
        year_of_manufacture: 2003,
        date_of_manufacture: '2003-07-09T23:00:00.000Z', 
        co2_emissions: 145,
        tax_due_date: '2003-07-31T23:00:00.000Z',  
        date_of_last_v5c_issued: '2023-07-09T23:00:00.000Z', 
        first_used_date: '2020-07-14T23:00:00.000Z', 
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'EU6d-TEMP',
        power_output: 400,
        price: 80000,
        make: 'BMW',
        model: 'M3 CSL',
        fuel_type: 'PETROL',
        tax_status: 'Yes',
        wheel_plan: '2 AXLE RIGID BODY'
      },
      {
        registration_number: 'VE16AUD',
        color: 'Silver',
        engine_size: 6000,
        year_of_manufacture: 1937,
        date_of_manufacture: '1937-02-20T00:00:00.000Z', 
        co2_emissions: 1100,
        tax_due_date: '1944-02-29T23:00:00.000Z', 
        date_of_last_v5c_issued: '2007-09-09T23:00:00.000Z', 
        first_used_date: '1937-03-15T00:00:00.000Z', 
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'EU6',
        power_output: 520,
        price: 1200000000,
        make: 'Audi',
        model: 'Auto Union V16 Streamline',
        fuel_type: 'DIESEL',
        tax_status: 'Yes',
        wheel_plan: '2 AXLE RIGID BODY'
      },
      {
        registration_number: 'DX71STU',
        color: 'Sky blue',
        engine_size: 1300,
        year_of_manufacture: 2021,
        date_of_manufacture: '1999-11-05T00:00:00.000Z',  
        co2_emissions: 125,
        tax_due_date: '2024-12-01T00:00:00.000Z',  
        date_of_last_v5c_issued: '2023-07-21T23:00:00.000Z',
        first_used_date: '2021-12-10T00:00:00.000Z',  
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'EU6d',
        power_output: 276,
        price: 110000,
        make: 'Nissan',
        model: 'Skyline GTR (R34)',
        fuel_type: 'PETROL',
        tax_status: 'Yes',
        wheel_plan: '2 AXLE RIGID BODY'
      },
       {
        registration_number: 'TESLA11',
        color: 'Red',
        engine_size: 0,
        year_of_manufacture: 2023,
        date_of_manufacture: '2023-07-14T23:00:00.000Z', 
        co2_emissions: 0,
        tax_due_date: '2024-07-14T23:00:00.000Z', 
        date_of_last_v5c_issued: '2023-07-14T23:00:00.000Z', 
        first_used_date: '2023-07-14T23:00:00.000Z', 
        marked_for_export: false,
        has_outstanding_recall: false,
        type_approval: 'M1',
        power_output: 426,
        price: 60000,
        make: 'Tesla',
        model: 'Model Y Performance',
        fuel_type: 'ELECTRICITY',
        tax_status: 'Yes',
        wheel_plan: 'ALL WHEEL DRIVE'
      }
    ];

    expect(response.body).to.deep.equal(expectedCars);
  });
});