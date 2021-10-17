import { createStore } from 'effector';
import { searchModel } from 'shared/models/search';

import { Results } from 'shared/typings/results';

const $isResultsLoading = createStore(true).on(
  searchModel.getSearchResultsFx.pending,
  (_, status) => status,
);
const $results = createStore<Results>(null).on(
  searchModel.getSearchResultsFx.doneData,
  (_, results) => results,
);
const $isSearchParamsExist = createStore(true).on(
  searchModel.searchParamsNotFounded,
  () => false,
);

export const resultsModel = {
  $isResultsLoading,
  $results,
  $isSearchParamsExist,
};
