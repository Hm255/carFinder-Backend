import { seedDatabase } from './seed.js';

(async () => {
  try {
    await seedDatabase(); 
    console.log("Seed script completed successfully."); 
  } catch (error) {
    console.error("Seed script failed:", error); 
    process.exit(1); 
  }
})();