import { useStore } from 'effector-react';
import React, { useMemo } from 'react';
import { searchModel } from 'shared/models/search';

import PetsIcon from '@mui/icons-material/Pets';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { AnimatedDog } from 'shared/ui/animated_dog';

import { Color } from './color';
import { model } from './model';
import { Tail } from './tail';
import { Type } from './type';

const SettingsContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  transition: 'height 02.s ease-out',

  '&[data-search-params-exist]': {
    height: 150,
    border: `1px solid ${theme.palette.common.black}`,
  },
}));

const DogContainer = styled('div')`
  position: relative;
  margin: -160px 0 -60px 0;
`;

export const SearchSettings = () => {
  const isSearchParamsExist = useStore(searchModel.$isSearchParamsExist);
  const isDisabledForm = useStore(model.$isDisabledForm);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    model.formSubmitted();
  };

  const Settings = useMemo(() => {
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
      </>
    );
  }, []);

  return (
    <SettingsContainer
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      data-search-params-exist={isSearchParamsExist}>
      {!isSearchParamsExist && (
        <DogContainer>
          <AnimatedDog />
        </DogContainer>
      )}
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center">
            {Settings}
            <Grid item marginLeft={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isDisabledForm}
                endIcon={<PetsIcon />}>
                Поиск
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </SettingsContainer>
  );
};
