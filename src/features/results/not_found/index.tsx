import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

import sadParrotGif from './sad_parrot.gif';

export const NotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      alignItems="center">
      <Grid item>
        <img src={sadParrotGif} loading="lazy" alt="Грустный попугай" />
      </Grid>
      <Grid item>
        <Typography variant="h5" component="p" align="center" gutterBottom>
          К сожалению, мы ничего не нашли
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" href="/">
          {' '}
          Давай попробуем еще раз{' '}
        </Button>
      </Grid>
    </Grid>
  );
};
