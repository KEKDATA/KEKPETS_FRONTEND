import faker from 'faker';

export const getResultsStub = () => ({
  count: 2,
  results: Array(30)
    .fill(30)
    .map(() => ({
      id: faker.datatype.uuid(),
      image: faker.image.imageUrl(),
      bbox: '0.1,0.2,0.3,0.4',
    })),
});
