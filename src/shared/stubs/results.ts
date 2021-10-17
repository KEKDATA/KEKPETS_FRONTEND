import faker from 'faker';

export const getResultsStub = () => ({
  count: 60,
  results: Array(75)
    .fill(75)
    .map(() => ({
      id: faker.datatype.uuid(),
      image: faker.image.imageUrl(),
      bbox: '0.1,0.2,0.3,0.4',
    })),
});
