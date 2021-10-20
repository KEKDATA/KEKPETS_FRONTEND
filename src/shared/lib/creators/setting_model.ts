import { createEvent, createStore } from 'effector';

import { searchModel } from 'entity/search';

import { SearchSettingsFieldsKeys } from 'shared/constants/search_settings_fields/keys';

interface Arguments {
  settingType: SearchSettingsFieldsKeys;
  defaultValue?: string;
}

export const createSettingModel = ({
  settingType,
  defaultValue = '',
}: Arguments) => {
  const valueChanged = createEvent<string>();
  const $value = createStore(defaultValue)
    .on(valueChanged, (_, changedValue) => changedValue)
    .on(
      searchModel.$searchSettingsFieldsFromUrl.updates,
      (state, searchSettingsFromUrl) => {
        if (!searchSettingsFromUrl || !searchSettingsFromUrl[settingType]) {
          return defaultValue;
        }

        const optionValueFromUrl = searchSettingsFromUrl[settingType];

        return optionValueFromUrl?.value ?? state;
      },
    );

  return { valueChanged, $value };
};
