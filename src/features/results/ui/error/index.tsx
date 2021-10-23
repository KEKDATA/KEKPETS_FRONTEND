import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import hiDogGif from './hi_dog.gif';

export const Error = () => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center">
      <Grid item>
        <img src={hiDogGif} loading="lazy" alt="" />
      </Grid>
      <Grid item>
        <Typography variant="h5" component="p">
          У нас что - то не так,
        </Typography>
        <Typography variant="h5" component="span">
          попробуйте еще раз через некоторое время
        </Typography>
      </Grid>
    </Grid>
  );
};
