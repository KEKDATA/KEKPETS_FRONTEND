import { createEvent, restore, sample } from 'effector';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { createSettingModel } from '../lib/create_setting_model';

const { $value, valueChanged } = createSettingModel({
  settingType: SearchSettingsFieldsKeys.Breed,
});

const autoCompleteValueChanged = createEvent<string>();

const $autoCompleteValue = restore<string | null>(
  autoCompleteValueChanged,
  null,
);

sample({
  clock: autoCompleteValueChanged,
  fn: value =>
    searchSettingsOptions.breeds.find(({ text }) => text === value).value,
  target: valueChanged,
});

export const breedModel = {
  $value,
  valueChanged,
  autoCompleteValueChanged,
  $autoCompleteValue,
};
