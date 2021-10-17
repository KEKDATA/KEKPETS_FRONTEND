import { combine, createEvent, createStore, guard, sample } from 'effector';
import { searchModel } from 'shared/models/search';

import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { PagesPaths } from 'shared/enums/pages_paths';
import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { breedModel } from './breed/model';
import { colorModel } from './color/model';
import { getQueryBySelectedSettings } from './lib/get_query_by_selected_settings';
import { isSettingExist } from './lib/is_setting_exist';
import { tailModel } from './tail/model';
import { typeModel } from './type/model';

const formSubmitted = createEvent();
const formActivated = createEvent();

const $isDisabledForm = createStore(true).on(formActivated, () => false);
const $settingsQueryString = combine({
  [SearchSettingsFieldsKeys.Type]: typeModel.$value,
  [SearchSettingsFieldsKeys.Tail]: tailModel.$value,
  [SearchSettingsFieldsKeys.Color]: colorModel.$value,
  [SearchSettingsFieldsKeys.Breed]: breedModel.$value,
}).map(getQueryBySelectedSettings);
const $requiredSettings = combine({
  type: typeModel.$value,
});
const $isSubmittedForm = createStore(false).on(formSubmitted, () => true);

sample({
  source: $settingsQueryString,
  clock: formSubmitted,
  fn: settingsQueryString => {
    window.history.pushState(
      '',
      '',
      getUrlWithQs({
        url: PagesPaths.Search,
        queryString: settingsQueryString,
      }),
    );
  },
});

sample({
  source: $settingsQueryString,
  clock: formSubmitted,
  target: searchModel.getSearchResultsFx,
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
  $isSubmittedForm,
};
