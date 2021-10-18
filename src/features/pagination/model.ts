import { createEvent, createStore, guard, sample } from 'effector';
import { searchModel } from 'shared/models/search';

import { setupPageToSearchParams } from 'features/pagination/lib/setup_page_to_search_params';

import { isBrowser } from 'shared/lib/browser/is_browser';
import { pushSearchParams } from 'shared/lib/url/push_search_params';
import { getSearchParams } from 'shared/lib/url/search_params';

import { PagesPaths } from 'shared/enums/pages_paths';

const pageSelected = createEvent<string>();

const initialState = isBrowser ? Number(getSearchParams().get('page')) || 1 : 1;
const $page = createStore(initialState);

const searchParamsReceived = sample({
  clock: pageSelected,
  fn: page => {
    if (!isBrowser) {
      return '';
    }

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
