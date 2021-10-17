import { Box } from '@mui/material';
import React, { FC } from 'react';

export const BBoxContainer: FC = props => {
  const { children } = props;

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-flex', overflow: 'hidden' }}>
      {children}
    </Box>
  );
};
