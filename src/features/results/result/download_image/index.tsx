import React from 'react';

import DownloadIcon from '@mui/icons-material/Download';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  image: string;
}

export const DownloadImage = ({ image }: Props) => {
  return (
    <Tooltip title="Загрузить изображение">
      <Fab
        color="primary"
        aria-label="Загрузить изображение"
        target="_blank"
        href={image}
        download>
        <DownloadIcon />
      </Fab>
    </Tooltip>
  );
};
