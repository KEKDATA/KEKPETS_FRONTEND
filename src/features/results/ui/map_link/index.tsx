import React from 'react';

import RoomIcon from '@mui/icons-material/Room';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { getGoogleMapLink } from 'shared/lib/map_link/google';

interface Props {
  address: string;
}

export const MapLink = ({ address }: Props) => {
  return (
    <Tooltip title="Открыть на карте">
      <Button
        size="large"
        aria-label="Открыть на карте"
        startIcon={<RoomIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={getGoogleMapLink(address)}>
        {address}
      </Button>
    </Tooltip>
  );
};
