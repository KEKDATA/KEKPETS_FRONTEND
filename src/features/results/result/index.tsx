import Grid from '@mui/material/Grid';
import React from 'react';

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
      <Characteristics />
    </Grid>
  );
};
