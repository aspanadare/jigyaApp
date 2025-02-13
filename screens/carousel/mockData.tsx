// mockData.ts
import { faker } from "@faker-js/faker";


faker.seed(12);


// Generate first set of mock data
const item = [...Array(6).keys()].map((_, index) => ({
    key: faker.string.uuid(),
    title: faker.music.genre(),
    image: faker.image.urlLoremFlickr({
        height: 300 * 1.4,
        category: "technology",
    }),
    index: index, // Include the index here
    bg: faker.internet.color(),
    description: faker.lorem.words(60),
    author: {
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
    }
}));


// Generate second set of mock data
const data2 = [...Array(5).keys()].map(() => ({
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

const courseData = [...Array(2).keys()].map(() => ({
    key: faker.string.uuid(),
    category: "Course",
    bg: faker.internet.color(),
    courseName:   faker.music.genre(),
    courseType: faker.helpers.arrayElement(["Degree", "Certificate", "Diploma"]),
    delivery: faker.helpers.arrayElement(["Classroom", "Live Online", "Online"]),
    universityName: faker.company.name(),
    universityLogo: faker.image.urlLoremFlickr({
      category: "education",
      height: 300,
      width: 300,
    }),
    image: faker.image.urlLoremFlickr({
      category: "education",
      height: 300 * 1.4,
    }),
    startDate: faker.date.future(),
    applyByDate: faker.date.future(),
    fees: faker.number.int({ min: 5000, max: 500000 }),
    universityLink: faker.internet.url(),
   
  }));

// export type Job = (typeof data2)[0]; // Type for jobs
// export type Item = (typeof data)[0];   // Type for items


export { item, data2, courseData}; // Named exports
