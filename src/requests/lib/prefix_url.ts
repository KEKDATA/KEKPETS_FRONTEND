import { prefixUrl } from 'shared/constants/prefix_url';

export const apiPrefixUrl = process.env.API_URL || `${prefixUrl}/api/v1`;
