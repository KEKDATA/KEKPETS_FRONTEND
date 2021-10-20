import { useStore } from 'effector-react';
import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import { BreedAutocomplete, breedModel } from 'entities/breed';
import { ColorSelect, colorModel } from 'entities/color';
import { tailModel, TailSelect } from 'entities/tail';
import { typeModel, TypeSelect } from 'entities/type';

export const SettingsGroups = memo(
  () => {
    const colorValue = useStore(colorModel.$value);
    const breedValue = useStore(breedModel.$autoCompleteValue);
    const tailValue = useStore(tailModel.$value);
    const typeValue = useStore(typeModel.$value);

    return (
      <>
        <Grid item>
          <TypeSelect value={typeValue} onChange={typeModel.valueChanged} />
        </Grid>
        <Grid item>
          <ColorSelect value={colorValue} onChange={colorModel.valueChanged} />
        </Grid>
        <Grid item>
          <TailSelect value={tailValue} onChange={tailModel.valueChanged} />
        </Grid>
        <Grid container justifyContent="center">
          <BreedAutocomplete
            value={breedValue}
            onChange={breedModel.autoCompleteValueChanged}
          />
        </Grid>
      </>
    );
  },
  () => true,
);

SettingsGroups.displayName = 'SettingsGroups';
