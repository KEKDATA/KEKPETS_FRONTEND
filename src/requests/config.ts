import ky from 'ky';

export const prefixUrl = process.env.API_URL || 'http://localhost:3000/api/v1';

export const apiConfig = ky.create({
  prefixUrl,
  timeout: 60000,
});
