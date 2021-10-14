import { SearchSettingsFields } from 'shared/enums/search_settings_fields';

import { getSearchParams } from 'shared/lib/url/search_params';

export const getFieldsFromSearch = () => {
  const fields = Object.values(SearchSettingsFields);

  const searchParams = getSearchParams(window.location.search);
  const fieldsFromSearch = fields.reduce(
    (acc: { [key: string]: string }, field) => {
      const fieldFromSearch = searchParams.get(field);

      if (fieldFromSearch) {
        acc[field] = fieldFromSearch;
      }

      return acc;
    },
    {},
  );

  return fieldsFromSearch;
};
