import { createEvent, createStore, sample } from 'effector';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { createSettingModel } from '../lib/create_setting_model';

const { $value, valueChanged } = createSettingModel({
  settingType: SearchSettingsFieldsKeys.Breed,
});

/**
 * @todo Пересмотреть подход к работе с данными в автокомплите
 */

const autoCompleteValueChanged = createEvent<string>();

const $autoCompleteValue = createStore<string | null>(null)
  .on(autoCompleteValueChanged, (_, value) => value)
  .on(
    $value.updates,
    (_, selectedValue) =>
      searchSettingsOptions.breeds.find(({ value }) => selectedValue === value)
        .text,
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
