import faker from 'faker';

export const getResultsStub = () =>
  Array(75)
    .fill(75)
    .map(() => ({
      id: faker.datatype.uuid(),
      photoUrl: faker.image.imageUrl(),
      mapParams: {
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
    }));
