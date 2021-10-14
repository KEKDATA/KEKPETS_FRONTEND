import { apiConfig } from './config';

export const search = (params: string) =>
  apiConfig.get(`search?${params}`).json();
