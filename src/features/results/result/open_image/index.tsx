import React from 'react';

import ImageIcon from '@mui/icons-material/Image';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  image: string;
}

export const OpenImage = ({ image }: Props) => {
  return (
    <Tooltip title="Открыть изображение в новой вкладке">
      <Fab
        color="primary"
        aria-label="Открыть изображение в новой вкладке"
        target="_blank"
        href={image}>
        <ImageIcon />
      </Fab>
    </Tooltip>
  );
};
