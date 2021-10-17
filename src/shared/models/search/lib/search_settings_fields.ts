import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { SearchSettingsFormUrl } from '../types';
import { getFieldsKeysFromUrl } from './fields_keys_from_url';
import { requiredSettingsIncluded } from './required_settings_included';

const fieldsConfig = [
  {
    options: searchSettingsOptions.types,
    key: SearchSettingsFieldsKeys.Type,
  },
  {
    options: searchSettingsOptions.colors,
    key: SearchSettingsFieldsKeys.Color,
  },
  {
    options: searchSettingsOptions.tails,
    key: SearchSettingsFieldsKeys.Tail,
  },
  {
    options: searchSettingsOptions.breeds,
    key: SearchSettingsFieldsKeys.Breed,
  },
];

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
    const selectedFieldConfig = fieldsConfig.find(
      fieldConfig => fieldConfig.key === key,
    );

    if (!selectedFieldConfig) {
      return;
    }

    const selectedOption = selectedFieldConfig.options.find(
      fieldOption => fieldOption.value === value,
    );

    if (!selectedOption) {
      return;
    }

    /**
     * @fixme Typescript
     */
    // @ts-ignore
    settings[key] = {
      key,
      ...selectedOption,
    };
  });

  return settings;
};
