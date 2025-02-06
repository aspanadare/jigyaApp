// mockData.ts
import { faker } from "@faker-js/faker";

faker.seed(12);

// Generate first set of mock data
const data = [...Array(20).keys()].map(() => ({
    key: faker.string.uuid(),
    title: faker.music.genre(),
    image: faker.image.urlLoremFlickr({
        height: 300 * 1.4,
        category: "technology",
    }),
    bg: faker.internet.color(),
    description: faker.lorem.words(60),
    author: {
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
    }
}));

// Generate second set of mock data
const data2 = [...Array(20).keys()].map(() => ({
   
   
    key: faker.string.uuid(),
    image: faker.image.urlLoremFlickr({
        height: 300 * 1.4,
        category: "technology",
    }),
    bg: faker.internet.color(),
    companyName: faker.company.name(),
    companyLogo: faker.image.urlLoremFlickr({ category: 'business', height: 300, width: 300 }),
    position: faker.person.jobTitle(),
    salaryRange: `${faker.number.int({ min: 5, max: 30 })} - ${faker.number.int({ min: 30, max: 100 })} Lacs`,
    location: `${faker.location.city()}, ${faker.location.country()}`,
    experienceRange: `${faker.number.int({ min: 1, max: 5 })} - ${faker.number.int({ min: 5, max: 10 })} years`,
}));

export type Job = (typeof data2)[0]; // Type for jobs
export type Item = (typeof data)[0];   // Type for items

export { data, data2 }; // Named exports
