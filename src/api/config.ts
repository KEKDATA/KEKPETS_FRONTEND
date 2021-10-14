import ky from 'ky';

export const prefixUrl = 'http://localhost:3000/api/';

export const apiConfig = ky.create({
  prefixUrl,
  timeout: 60000,
});