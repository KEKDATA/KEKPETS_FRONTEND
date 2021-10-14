import { combine, createEvent, createStore, guard, sample } from 'effector';
import { PagesPaths } from 'shared/enums/pages_paths';
import { SearchSettingsFields } from 'shared/enums/search_settings_fields';

import { getQueryString } from 'shared/lib/url/query_string';
import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { breedModel } from './breed/model';
import { shadeModel } from './shade/model';
import { tailModel } from './tail/model';
import { typeModel } from './type/model';

const isSettingExist = (setting?: string) => setting && setting.length > 0;

const formSubmitted = createEvent();
const formActivated = createEvent();

const $isDisabledForm = createStore(true).on(formActivated, () => false);
const $settingsQueryString = combine({
  [SearchSettingsFields.Type]: typeModel.$value,
  [SearchSettingsFields.Tail]: tailModel.$value,
  [SearchSettingsFields.Shade]: shadeModel.$value,
  [SearchSettingsFields.Breed]: breedModel.$value,
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
