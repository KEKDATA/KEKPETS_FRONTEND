import { combine, createEvent, createStore, guard, sample } from 'effector';

import { getQueryString } from 'shared/lib/url/query_string';
import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { PagesPaths } from 'shared/enums/pages_paths';
import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { breedModel } from './breed/model';
import { colorModel } from './color/model';
import { tailModel } from './tail/model';
import { typeModel } from './type/model';

const isSettingExist = (setting?: string) => setting && setting.length > 0;

const formSubmitted = createEvent();
const formActivated = createEvent();

const $isDisabledForm = createStore(true).on(formActivated, () => false);
const $settingsQueryString = combine({
  [SearchSettingsFieldsKeys.Type]: typeModel.$value,
  [SearchSettingsFieldsKeys.Tail]: tailModel.$value,
  [SearchSettingsFieldsKeys.Color]: colorModel.$value,
  [SearchSettingsFieldsKeys.Breed]: breedModel.$value,
}).map(settings => {
  const selectedSettings = Object.fromEntries(
    Object.entries(settings).filter(([key, value]) => isSettingExist(value)),
  );

  return getQueryString(selectedSettings);
});
const $requiredSettings = combine({
  type: typeModel.$value,
});

sample({
  source: $settingsQueryString,
  clock: formSubmitted,
  fn: settingsQueryString => {
    window.history.pushState(
      '',
      '',
      getUrlWithQs({
        url: PagesPaths.Results,
        queryString: settingsQueryString,
      }),
    );
  },
});

guard({
  clock: $requiredSettings,
  filter: requiredSettings =>
    Object.values(requiredSettings).every(isSettingExist),
  target: formActivated,
});

export const model = {
  formSubmitted,
  $isDisabledForm,
  $settingsQueryString,
};
