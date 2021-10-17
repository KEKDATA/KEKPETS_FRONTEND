import PetsIcon from '@mui/icons-material/Pets';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useStore } from 'effector-react';
import React, { useMemo } from 'react';
import { searchModel } from 'shared/models/search';

import { AnimatedDog } from 'shared/ui/animated_dog';

import { Color } from './color';
import { model } from './model';
import { Tail } from './tail';
import { Type } from './type';

const SettingsContainer = styled(Grid)`
  height: 100vh;
  transition: height 0.1s ease-out;

  &[data-search-params-exist='true'] {
    height: 150px;
  }
`;

const DogContainer = styled('div')`
  position: absolute;
  top: 100px;
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
