import { Results } from 'shared/typings/results';

import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { apiConfig } from './config';
import { Paths } from './paths';

export const search = (params: string): Promise<Results> =>
  apiConfig
    .get(getUrlWithQs({ url: Paths.Search, queryString: params }))
    .json();
