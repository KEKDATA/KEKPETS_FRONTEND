import React from 'react';

import Grid from '@mui/material/Grid';

import { DownloadImage } from 'features/results/result/download_image';

import { Result as ResultType } from 'shared/typings/results';

import { Characteristics } from './characteristics';
import { PetView } from './pet_view';

interface Props {
  result: ResultType;
}

export const Result = ({ result }: Props) => {
  return (
    <Grid item>
      <PetView image={result.image} bbox={result.bbox} />
      <Grid container spacing={2}>
        <Grid item>
          <Characteristics />
        </Grid>
        <Grid item>
          <DownloadImage image={result.image} />
        </Grid>
      </Grid>
    </Grid>
  );
};
