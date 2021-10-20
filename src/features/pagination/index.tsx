import { useStore } from 'effector-react';
import React from 'react';

import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { searchModel } from 'entity/search';

import { usePaginationColor } from './lib/pagination_color';
import { paginationModel } from './model';

export const Pagination = () => {
  const color = usePaginationColor();

  const paginationCount = useStore(searchModel.$count);
  const page = useStore(paginationModel.$page);

  if (!paginationCount) {
    return null;
  }

  const handleChange = (_, selectedPage: number) => {
    /**
     * Гвард если пользователь выберет такую же страницу повторно (ui позволяет)
     * То мы не выполняем дальнейшую логику по работе с апи и URL
     */
    if (page === selectedPage) {
      return;
    }

    paginationModel.pageSelected(selectedPage);
  };

  return (
    <Stack spacing={2} alignItems="center" padding={3}>
      <MuiPagination
        page={page}
        count={paginationCount}
        color={color}
        size="large"
        onChange={handleChange}
      />
    </Stack>
  );
};
