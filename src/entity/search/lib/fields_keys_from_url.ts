import { SearchSettingsFieldsKeys } from 'constants/search_settings_fields/keys';

import { isBrowser } from 'shared/lib/browser/is_browser';
import { getSearchParams } from 'shared/lib/url/search_params';

export const getFieldsKeysFromUrl = () => {
  const searchSettings = Object.values(SearchSettingsFieldsKeys);

  if (!isBrowser) {
    return null;
  }

  const searchParams = getSearchParams();

  return searchSettings.reduce(
    (acc: { [key: string]: string }, searchSetting) => {
      const fieldFromSearch = searchParams.get(searchSetting);

      if (fieldFromSearch) {
        acc[searchSetting] = fieldFromSearch;
      }

      return acc;
    },
    {},
  );
};
