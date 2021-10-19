import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from 'effector';
import { createGate } from 'effector-react';
import { condition } from 'patronum';
import { api } from 'requests/index';
import { getSearchSettingsFields } from 'shared/models/search/lib/search_settings_fields';

import { getQueryString } from 'shared/lib/url/query_string';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { getFieldsKeysFromUrl } from './lib/fields_keys_from_url';
import { isSearchParamsExist } from './lib/is_search_params_exist';
import { requiredSettingsIncluded } from './lib/required_settings_included';
import { SearchSettingsFormUrl } from './types';

const SearchGate = createGate();

const searchParamsNotFounded = createEvent();

const getSearchResultsFx = createEffect(api.videcamFrame);

const searchResultsReceived = getSearchResultsFx.doneData;

const countReceived = searchResultsReceived.map(response => response.count);

const resultsReceived = searchResultsReceived.map(response => response.results);

const $searchSettingsFieldsFromUrl = createStore<null | SearchSettingsFormUrl>(
  null,
).on(
  [
    SearchGate.open,
    getSearchResultsFx.done,
    getSearchResultsFx.fail,
    searchParamsNotFounded,
  ],
  getSearchSettingsFields,
);

const $isSearchParamsExist = createStore(false)
  .on(searchParamsNotFounded, () => false)
  .on(getSearchResultsFx.pending, () => true);

const $count = restore(countReceived, null);

const $results = restore(resultsReceived, null);

const fieldsFromSearchParsed = sample({
  clock: SearchGate.open,
  fn: () => {
    const fieldsKeysFromUrl = getFieldsKeysFromUrl();
    const isRequiredSettingsIncluded = requiredSettingsIncluded({
      searchSettings: fieldsKeysFromUrl,
      requiredSettings: [SearchSettingsFieldsKeys.Type],
    });

    if (!isRequiredSettingsIncluded) {
      return '';
    }

    return getQueryString(fieldsKeysFromUrl);
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
  $searchSettingsFieldsFromUrl,
  $isSearchParamsExist,
  $count,
  $results,
  countReceived,
  resultsReceived,
  getSearchResultsFx,
  searchParamsNotFounded,
};
