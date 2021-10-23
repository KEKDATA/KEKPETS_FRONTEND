import { createApiUrl } from 'requests/lib/create_api_url';

import { SearchResponse } from 'shared/typings/search';

import { toJSON } from './lib/to_json';
import { Paths } from './paths';

export const search = (params: string): Promise<SearchResponse> =>
  fetch(createApiUrl({ path: Paths.Search, params })).then(toJSON);
