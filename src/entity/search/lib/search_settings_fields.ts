import { searchSettingsOptionsMocks } from 'shared/mocks/search_settings_options';

import { SearchSettingsFieldsKeys } from 'shared/constants/search_settings_fields/keys';

import { SearchSettingsFormUrl } from '../types';
import { getFieldsKeysFromUrl } from './fields_keys_from_url';
import { requiredSettingsIncluded } from './required_settings_included';

const fieldsConfig = [
  {
    options: searchSettingsOptionsMocks.types,
    key: SearchSettingsFieldsKeys.Type,
  },
  {
    options: searchSettingsOptionsMocks.colors,
    key: SearchSettingsFieldsKeys.Color,
  },
  {
    options: searchSettingsOptionsMocks.tails,
    key: SearchSettingsFieldsKeys.Tail,
  },
  {
    options: searchSettingsOptionsMocks.breeds,
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

  const settings: SearchSettingsFormUrl = {};

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
    settings[key] = {
      // @ts-ignore
      key,
      ...selectedOption,
    };
  });

  return settings;
};
