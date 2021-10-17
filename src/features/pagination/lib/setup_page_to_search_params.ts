import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

export const setupPageToSearchParams = (
  searchParams: URLSearchParams,
  page: string,
) => {
  if (searchParams.has(SearchSettingsFieldsKeys.Page)) {
    searchParams.set(SearchSettingsFieldsKeys.Page, page);
  } else {
    searchParams.append(SearchSettingsFieldsKeys.Page, page);
  }

  return searchParams;
};
