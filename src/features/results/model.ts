import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { Results } from 'shared/typings/results';

import { api } from 'api/index';

import { getQueryString } from 'shared/lib/url/query_string';

import { getFieldsFromSearch } from './lib/fields_from_search';

const ResultsGate = createGate();

const getSearchResultsFx = createEffect(api.search);

const $isResultsLoading = createStore(true).on(
  getSearchResultsFx.pending,
  (_, status) => status,
);
const $results = createStore<Results>(null).on(
  getSearchResultsFx.doneData,
  (_, results) => results,
);

sample({
  clock: ResultsGate.open,
  fn: () => getQueryString(getFieldsFromSearch()),
  target: getSearchResultsFx,
});

export const resultsModel = {
  $isResultsLoading,
  $results,
  getSearchResultsFx,
  ResultsGate,
};
