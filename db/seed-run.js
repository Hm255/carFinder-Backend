import { seedDatabase } from './seed.js';
(async () => {
    try {
        await seedDatabase();
    }
    catch (error) {
        process.exit(1);
    }
})();
