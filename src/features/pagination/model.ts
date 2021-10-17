import { createEvent, guard, restore, sample } from 'effector';
import { searchModel } from 'shared/models/search';

import { setupPageToSearchParams } from 'features/pagination/lib/setup_page_to_search_params';

import { pushSearchParams } from 'shared/lib/url/push_search_params';
import { getSearchParams } from 'shared/lib/url/search_params';

import { PagesPaths } from 'shared/enums/pages_paths';

const pageSelected = createEvent<string>();

const $page = restore(
  pageSelected.map(Number),
  Number(getSearchParams().get('page')) || 1,
);

const searchParamsReceived = sample({
  clock: guard({
    source: pageSelected,
    filter: page => getSearchParams().get('page') !== page,
  }),
  fn: page => {
    const searchParams = getSearchParams();
    const withPage = setupPageToSearchParams(searchParams, page);

    return withPage.toString();
  },
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
