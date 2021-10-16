import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { Results } from 'shared/typings/results';

import { apiConfig } from './config';
import { Paths } from './paths';

export const videcamFrame = (params: string): Promise<Results> =>
  apiConfig
    .get(getUrlWithQs({ url: Paths.videcamframe, queryString: params }))
    .json();
