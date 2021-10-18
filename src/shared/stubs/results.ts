import faker from 'faker';

export const getResultsStub = () => ({
  count: 2,
  results: Array(30)
    .fill(30)
    .map(() => ({
      id: faker.datatype.uuid(),
      image:
        'https://cdn.pixabay.com/photo/2016/12/27/23/30/cat-1935104_1280.jpg',
      bbox: '0.1,0.2,0.3,0.4',
    })),
});
