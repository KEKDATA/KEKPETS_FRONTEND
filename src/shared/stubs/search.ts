import faker from 'faker';

export const getSearchStubs = () =>
  Array(30)
    .fill(30)
    .map(() => ({
      id: faker.datatype.uuid(),
      photoUrl: faker.image.imageUrl(),
      photoDate: faker.date.past(),
    }));
