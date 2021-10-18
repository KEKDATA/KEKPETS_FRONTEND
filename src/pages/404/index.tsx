import { PageProps } from 'gatsby';
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import happyDogeImage from './happy_doge.jpg';

const Container = styled('main')`
  background-color: aliceblue;
`;

const NotFound: React.FC<PageProps> = () => (
  <Container>
    <Grid
      sx={{
        height: '100vh',
      }}
      container
      direction="column"
      alignItems="center"
      alignContent="center"
      justifyContent="center">
      <Grid item>
        <Typography variant="h4" component="p" gutterBottom>
          А ты куда, такой странички нет!
        </Typography>
      </Grid>
      <Grid item>
        <img src={happyDogeImage} loading="lazy" />
      </Grid>
    </Grid>
  </Container>
);

export default NotFound;
