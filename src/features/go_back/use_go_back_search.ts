import { useEffect } from 'react';

import { getSearchParams } from 'shared/lib/url/search_params';

import { searchModel } from '../../entity/search';

export const useGoBackSearch = () => {
  useEffect(() => {
    const handleGoBack = () => {
      const searchParams = getSearchParams().toString();

      if (searchParams.length === 0) {
        return searchModel.searchParamsNotFounded();
      }

      searchModel.getSearchResultsFx(searchParams.toString());
    };

    window.addEventListener('popstate', handleGoBack);

    return () => {
      window.removeEventListener('popstate', handleGoBack);
    };
  }, []);
};
