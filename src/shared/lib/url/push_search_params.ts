import { getUrlWithQs } from 'shared/lib/url/with_qs';

interface Arguments {
  url: string;
  queryString: string;
}

export const pushSearchParams = ({ url, queryString }: Arguments) =>
  window.history.pushState(
    '',
    '',
    getUrlWithQs({
      url,
      queryString,
    }),
  );
