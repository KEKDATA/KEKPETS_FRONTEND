import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { Paths } from './paths';
import { prefixUrl } from './prefix_url';

interface Arguments {
  path: Paths;
  params?: string;
}

export const createApiUrl = ({ path, params }: Arguments) => {
  if (!params) {
    return `${prefixUrl}/${path}`;
  }

  return `${prefixUrl}/${getUrlWithQs({
    url: path,
    queryString: params,
  })}`;
};
