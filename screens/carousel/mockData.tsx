import { faker } from "@faker-js/faker";

faker.seed(12);

const data = [...Array(20).keys()].map(() => ({
    key: faker.string.uuid(),
    title: faker.music.genre(), // Changed to a more fitting category
    image: faker.image.urlLoremFlickr({
         
        height: 300 * 1.4,
        category: "nature", // You can change this category if needed
    }),
    bg: faker.internet.color(),
    description: faker.lorem.words(60),
    author: {
        name: faker.person.fullName(),
        avatar: faker.image.avatar(), // Use a more general avatar image
    },
}));

export type item = (typeof data)[0];
export default data;