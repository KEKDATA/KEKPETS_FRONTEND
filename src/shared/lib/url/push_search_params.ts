import { isBrowser } from 'shared/lib/browser/is_browser';
import { getUrlWithQs } from 'shared/lib/url/with_qs';

interface Arguments {
  url: string;
  queryString: string;
}

export const pushSearchParams = ({ url, queryString }: Arguments) => {
  if (!isBrowser) {
    return null;
  }

  window.history.pushState(
    '',
    '',
    getUrlWithQs({
      url,
      queryString,
    }),
  );
};
