import { createEvent, createStore, guard, sample } from 'effector';
import { searchModel } from 'shared/models/search';

import { setupPageToSearchParams } from 'features/pagination/lib/setup_page_to_search_params';

import { pushSearchParams } from 'shared/lib/url/push_search_params';
import { getSearchParams } from 'shared/lib/url/search_params';

import { PagesPaths } from 'shared/enums/pages_paths';

const pageSelected = createEvent<string>();

const $page = createStore(Number(getSearchParams().get('page')) || 1);

const searchParamsReceived = sample({
  clock: pageSelected,
  fn: page => {
    const searchParams = getSearchParams();
    const withPage = setupPageToSearchParams(searchParams, page);

    return withPage.toString();
  },
});

guard({
  clock: searchParamsReceived,
  source: pageSelected.map(Number),
  filter: Boolean,
  target: $page,
});

sample({
  clock: searchParamsReceived,
  target: searchModel.getSearchResultsFx,
});

sample({
  clock: searchParamsReceived,
  fn: searchParams =>
    pushSearchParams({
      url: PagesPaths.Search,
      queryString: searchParams,
    }),
});

export const paginationModel = { pageSelected, $page };
