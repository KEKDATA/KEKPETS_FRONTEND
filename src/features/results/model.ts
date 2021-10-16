import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { condition } from 'patronum';

import { api } from 'api/index';

import { getQueryString } from 'shared/lib/url/query_string';

import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { Results } from 'shared/typings/results';

import { getSearchSettingsFromUrl } from './lib/fields_from_search';
import { isSearchParamsExist } from './lib/is_search_params_exist';
import { requiredSettingsIncluded } from './lib/required_settings_included';

interface SearchSettingsFormUrl {
  [SearchSettingsFieldsKeys.Type]?: string;
  [SearchSettingsFieldsKeys.Breed]?: string;
  [SearchSettingsFieldsKeys.Shade]?: string;
  [SearchSettingsFieldsKeys.Tail]?: string;
}

const ResultsGate = createGate();

const getSearchResultsFx = createEffect(api.search);

const fieldsFromSearchParsed = sample({
  clock: ResultsGate.open,
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
const searchParamsNotFounded = createEvent();

const $searchSettingsFormUrl = createStore<null | SearchSettingsFormUrl>(
  null,
).on(ResultsGate.open, getSearchSettingsFromUrl);
const $isResultsLoading = createStore(true).on(
  getSearchResultsFx.pending,
  (_, status) => status,
);
const $results = createStore<Results>(null).on(
  getSearchResultsFx.doneData,
  (_, results) => results,
);
const $isSearchParamsExist = createStore(true).on(
  searchParamsNotFounded,
  () => false,
);

condition({
  source: fieldsFromSearchParsed,
  if: isSearchParamsExist,
  then: getSearchResultsFx,
  else: searchParamsNotFounded,
});

export const resultsModel = {
  $isResultsLoading,
  $results,
  $isSearchParamsExist,
  $searchSettingsFormUrl,
  getSearchResultsFx,
  ResultsGate,
};
