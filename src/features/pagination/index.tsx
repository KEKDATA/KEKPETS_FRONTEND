import { useStore } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { paginationModel } from 'features/pagination/model';

export const Pagination = () => {
  const paginationCount = useStore(searchModel.$count);
  const page = useStore(paginationModel.$page);

  if (!paginationCount) {
    return null;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    paginationModel.pageSelected(value.toString());
  };

  return (
    <Stack spacing={2} alignItems="center" padding={3}>
      <MuiPagination
        page={page}
        count={paginationCount}
        color="primary"
        size="large"
        onChange={handleChange}
      />
    </Stack>
  );
};
