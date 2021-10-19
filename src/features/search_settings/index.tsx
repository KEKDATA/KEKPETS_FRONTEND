import { useStore } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { AnimatedDog } from 'shared/ui/animated_dog';

import { model } from './model';
import { SettingsGroups } from './settings_groups';
import { Submit } from './submit';

const SettingsContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  transition: 'height 0.2s ease-out',

  '&[data-search-params-exist="true"]': {
    minHeight: 280,
    height: 280,
    [theme.breakpoints.up('sm')]: {
      height: 150,
      minHeight: 'auto',
    },
  },
}));

const SettingsGrid = styled(Grid)(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const DogContainer = styled('div')`
  position: relative;
  margin: -160px 0 -60px 0;
`;

export const SearchSettings = () => {
  const isSearchParamsExist = useStore(searchModel.$isSearchParamsExist);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    model.formSubmitted();
  };

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
          <SettingsGrid container rowSpacing={isMobile ? 0.2 : 1}>
            <SettingsGroups />
            <Grid item marginLeft={isMobile ? 0 : 1}>
              <Submit />
            </Grid>
          </SettingsGrid>
        </form>
      </Container>
    </SettingsContainer>
  );
};
