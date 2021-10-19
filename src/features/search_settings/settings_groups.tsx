import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import { Breed } from './breed';
import { Color } from './color';
import { Tail } from './tail';
import { Type } from './type';

export const SettingsGroups = memo(
  () => {
    return (
      <>
        <Grid item>
          <Type />
        </Grid>
        <Grid item>
          <Color />
        </Grid>
        <Grid item>
          <Tail />
        </Grid>
        <Grid container justifyContent="center">
          <Breed />
        </Grid>
      </>
    );
  },
  () => true,
);

SettingsGroups.displayName = 'SettingsGroups';
