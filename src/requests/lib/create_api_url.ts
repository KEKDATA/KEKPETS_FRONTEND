import { prefixUrl } from 'requests/config';
import { Paths } from 'requests/paths';

import { getUrlWithQs } from 'shared/lib/url/with_qs';

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
