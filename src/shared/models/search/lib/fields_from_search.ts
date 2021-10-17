import { getSearchParams } from 'shared/lib/url/search_params';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

export const getSearchSettingsFromUrl = () => {
  const searchSettings = Object.values(SearchSettingsFieldsKeys);

  const searchParams = getSearchParams(window.location.search);

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
