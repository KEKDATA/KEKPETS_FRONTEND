import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { isBrowser } from 'shared/lib/browser/is_browser';

import sadDog from './sad_bubz.jpg';

const Description = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.common.black,
}));

/**
 * Так сделано потому что в проде урл основной https://kekdata.github.io/KEKPETS_PUBLIC/
 * Вырезаем серч параметры и так попадаем на главную
 */
const urlToMainSearch = isBrowser ? window.location.href.split('?')[0] : '/';

export const NotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      alignItems="center">
      <Grid item>
        <img src={sadDog} loading="lazy" alt="Грустный попугай" />
      </Grid>
      <Grid item>
        <Description variant="h5" align="center" gutterBottom>
          Результатов по вашему поиску не обнаружено
        </Description>
      </Grid>
      <Grid item>
        <Button variant="contained" href={urlToMainSearch}>
          Давай попробуем еще раз
        </Button>
      </Grid>
    </Grid>
  );
};
