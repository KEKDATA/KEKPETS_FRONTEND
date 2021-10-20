import { useStore } from 'effector-react';
import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import { Breed } from 'entities/breed';
import { ColorSelect, colorModel } from 'entities/color';
import { Tail } from 'entities/tail';
import { Type } from 'entities/type';

export const SettingsGroups = memo(
  () => {
    const colorValue = useStore(colorModel.$value);
    return (
      <>
        <Grid item>
          <Type />
        </Grid>
        <Grid item>
          <ColorSelect value={colorValue} onChange={colorModel.valueChanged} />
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
