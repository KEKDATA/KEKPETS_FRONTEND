import React, { FC } from 'react';

import Box from '@mui/material/Box';

export const BBoxContainer: FC = props => {
  const { children } = props;

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-flex', overflow: 'hidden' }}>
      {children}
    </Box>
  );
};
