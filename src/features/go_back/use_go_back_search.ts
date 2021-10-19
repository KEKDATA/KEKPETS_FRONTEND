import { useEffect } from 'react';
import { searchModel } from 'shared/models/search';

import { getSearchParams } from 'shared/lib/url/search_params';

export const useGoBackSearch = () => {
  useEffect(() => {
    window.addEventListener('popstate', () => {
      const searchParams = getSearchParams().toString();

      if (searchParams.length === 0) {
        return searchModel.searchParamsNotFounded();
      }

      searchModel.getSearchResultsFx(searchParams.toString());
    });
  }, []);
};
