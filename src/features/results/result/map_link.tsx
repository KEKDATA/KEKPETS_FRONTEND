import Button from '@mui/material/Button';
import React, { useMemo } from 'react';

interface Props {
  lat: string;
  lon: string;
}

export const MapLink = ({ lat, lon }: Props) => {
  const pathToMap = useMemo(() => {
    if (!lon || !lat) {
      return null;
    }

    const href = `https://maps.yandex.com/?ll=${lat}, ${lon}&z=12`;

    return href;
  }, [lon, lat]);

  if (!pathToMap) {
    return null;
  }

  return (
    <Button href={pathToMap} target="_blank" rel="noopener noreferrer">
      Открыть карту
    </Button>
  );
};
