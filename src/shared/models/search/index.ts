import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { condition } from 'patronum';

import { api } from 'api/index';

import { getQueryString } from 'shared/lib/url/query_string';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { getSearchSettingsFromUrl } from './lib/fields_from_search';
import { isSearchParamsExist } from './lib/is_search_params_exist';
import { requiredSettingsIncluded } from './lib/required_settings_included';

interface SearchSettingsFormUrl {
  [SearchSettingsFieldsKeys.Type]?: string;
  [SearchSettingsFieldsKeys.Breed]?: string;
  [SearchSettingsFieldsKeys.Color]?: string;
  [SearchSettingsFieldsKeys.Tail]?: string;
}

const SearchGate = createGate();

const searchParamsNotFounded = createEvent();

const getSearchResultsFx = createEffect(api.videcamFrame);

const $searchSettingsFromUrl = createStore<null | SearchSettingsFormUrl>(
  null,
).on(SearchGate.open, getSearchSettingsFromUrl);

const $isSearchParamsExist = createStore(true)
  .on(searchParamsNotFounded, () => false)
  .on(getSearchResultsFx.pending, () => true);

const fieldsFromSearchParsed = sample({
  clock: SearchGate.open,
  fn: () => {
    const searchSettingsFromUrl = getSearchSettingsFromUrl();
    const isRequiredSettingsIncluded = requiredSettingsIncluded({
      searchSettings: searchSettingsFromUrl,
      requiredSettings: [SearchSettingsFieldsKeys.Type],
    });

    if (!isRequiredSettingsIncluded) {
      return '';
    }

    return getQueryString(searchSettingsFromUrl);
  },
});

condition({
  source: fieldsFromSearchParsed,
  if: isSearchParamsExist,
  then: getSearchResultsFx,
  else: searchParamsNotFounded,
});

export const searchModel = {
  SearchGate,
  searchParamsNotFounded,
  $searchSettingsFromUrl,
  $isSearchParamsExist,
  getSearchResultsFx,
};
