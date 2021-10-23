import { useStore } from 'effector-react';
import React from 'react';

import { paginationModel, SearchPagination } from 'entity/pagination';
import { searchModel } from 'entity/search';

export const Pagination = () => {
  const paginationCount = useStore(searchModel.$count);
  const page = useStore(paginationModel.$page);
  const resultsNotFound = useStore(searchModel.$resultsNotFound);

  if (!paginationCount || resultsNotFound) {
    return null;
  }

  return (
    <SearchPagination
      paginationCount={paginationCount}
      page={page}
      onChange={paginationModel.pageSelected}
    />
  );
};
