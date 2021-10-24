import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { Paths } from './paths';
import { apiPrefixUrl } from './prefix_url';

interface Arguments {
  path: Paths;
  params?: string;
}

export const createApiUrl = ({ path, params }: Arguments) => {
  if (!params) {
    return `${apiPrefixUrl}/${path}`;
  }

  return `${apiPrefixUrl}/${getUrlWithQs({
    url: path,
    queryString: params,
  })}`;
};
