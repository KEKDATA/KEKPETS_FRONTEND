import PetsIcon from '@mui/icons-material/Pets';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useStore } from 'effector-react';
import React, { useMemo } from 'react';

import { Title } from 'shared/ui/title';

import { Color } from './color';
import { model } from './model';
import { Tail } from './tail';
import { Type } from './type';

export const SearchSettings = () => {
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
    <>
      <Title text="Заполните основную информацию" />
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center">
            {Settings}
            <Grid item>
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
    </>
  );
};
