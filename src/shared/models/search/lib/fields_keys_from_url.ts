import { isBrowser } from 'shared/lib/browser/is_browser';
import { getSearchParams } from 'shared/lib/url/search_params';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

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
