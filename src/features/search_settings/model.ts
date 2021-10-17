import { combine, createEvent, createStore, sample } from 'effector';
import { searchModel } from 'shared/models/search';

import { pushSearchParams } from 'shared/lib/url/push_search_params';
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

const $isDisabledForm = combine({
  type: typeModel.$value,
}).map(
  requiredSettings => !Object.values(requiredSettings).every(isSettingExist),
);

const $settingsQueryString = combine({
  [SearchSettingsFieldsKeys.Type]: typeModel.$value,
  [SearchSettingsFieldsKeys.Tail]: tailModel.$value,
  [SearchSettingsFieldsKeys.Color]: colorModel.$value,
  [SearchSettingsFieldsKeys.Breed]: breedModel.$value,
}).map(settings => getQueryBySelectedSettings({ ...settings, page: '1' }));

const $isSubmittedForm = createStore(false).on(formSubmitted, () => true);

sample({
  source: $settingsQueryString,
  clock: formSubmitted,
  fn: settingsQueryString => {
    pushSearchParams({
      url: PagesPaths.Search,
      queryString: settingsQueryString,
    });
  },
});

sample({
  source: $settingsQueryString,
  clock: formSubmitted,
  target: searchModel.getSearchResultsFx,
});

export const model = {
  formSubmitted,
  $isDisabledForm,
  $settingsQueryString,
  $isSubmittedForm,
};
