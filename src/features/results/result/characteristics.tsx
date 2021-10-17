import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { useStore } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

export const Characteristics = () => {
  const searchSettingsFields = useStore(
    searchModel.$searchSettingsFieldsFromUrl,
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>Соответствует ли выбранным характеристикам?</div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
