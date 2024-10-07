import { faker } from '@faker-js/faker';


export const generateRandomEmployeeData = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dependents: Math.floor(Math.random() * 9) + 1 // Generates a single-digit random number
    };
};