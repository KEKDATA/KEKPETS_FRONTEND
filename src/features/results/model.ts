import { createStore } from 'effector';
import { searchModel } from 'shared/models/search';

import { Results } from 'shared/typings/results';

const $isResultsLoading = createStore(true).on(
  searchModel.getSearchResultsFx.pending,
  (_, status) => status,
);
const $results = createStore<Results>(null).on(
  searchModel.getSearchResultsFx.doneData,
  (_, response) => response.results,
);

export const resultsModel = {
  $isResultsLoading,
  $results,
};
