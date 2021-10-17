import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';
import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { SearchSettingsFormUrl } from '../types';
import { getFieldsKeysFromUrl } from './fields_keys_from_url';
import { requiredSettingsIncluded } from './required_settings_included';

const defaultSettings = {
  [SearchSettingsFieldsKeys.Type]: {
    key: SearchSettingsFieldsKeys.Type,
    text: SearchSettingsFieldsTranslates.Type,
  },
  [SearchSettingsFieldsKeys.Tail]: {
    key: SearchSettingsFieldsKeys.Tail,
    text: SearchSettingsFieldsTranslates.Tail,
  },
  [SearchSettingsFieldsKeys.Color]: {
    key: SearchSettingsFieldsKeys.Color,
    text: SearchSettingsFieldsTranslates.Color,
  },
  [SearchSettingsFieldsKeys.Breed]: {
    key: SearchSettingsFieldsKeys.Breed,
    text: SearchSettingsFieldsTranslates.Breed,
  },
};

export const getSearchSettingsFields = () => {
  const fieldsKeysFromUrl = getFieldsKeysFromUrl();
  const isRequiredSettingsIncluded = requiredSettingsIncluded({
    searchSettings: fieldsKeysFromUrl,
    requiredSettings: [SearchSettingsFieldsKeys.Type],
  });

  if (!isRequiredSettingsIncluded) {
    return null;
  }

  let settings: SearchSettingsFormUrl = {};

  (
    Object.entries(fieldsKeysFromUrl) as Array<
      [SearchSettingsFieldsKeys, string]
    >
  ).forEach(([key, value]) => {
    /**
     * @fixme Typescript
     */
    // @ts-ignore
    settings[key] = { ...defaultSettings[key], value };
  });

  return settings;
};
