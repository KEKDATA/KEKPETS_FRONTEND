import React from 'react';

import { MapLink } from 'features/results/result/map_link';

import { Result as ResultType } from 'shared/typings/results';

interface Props {
  result: ResultType;
}

export const Result = ({ result }: Props) => {
  const { mapParams } = result;

  return (
    <div>
      <img src={result.photoUrl} loading="lazy" />
      <MapLink lat={mapParams.lat} lon={mapParams.lon} />
    </div>
  );
};
