import { createEvent, createStore } from 'effector';
import { searchModel } from 'shared/models/search';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

interface Arguments {
  settingType: SearchSettingsFieldsKeys;
}

export const createSettingModel = ({ settingType }: Arguments) => {
  const valueChanged = createEvent<string>();
  const $value = createStore('')
    .on(valueChanged, (_, changedValue) => changedValue)
    .on(
      searchModel.$searchSettingsFromUrl.updates,
      (state, searchSettingsFromUrl) => {
        if (!searchSettingsFromUrl || !searchSettingsFromUrl[settingType]) {
          return state;
        }

        const optionValueFromUrl = searchSettingsFromUrl[settingType];

        return optionValueFromUrl;
      },
    );

  return { valueChanged, $value };
};
