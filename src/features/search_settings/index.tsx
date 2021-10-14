import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useStore } from 'effector-react';
import React, { useMemo } from 'react';
import { PagesPaths } from 'shared/enums/pages_paths';
import { useLocation } from 'wouter';

import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { Title } from 'shared/ui/title';

import { Breed } from './breed';
import { model } from './model';
import { Shade } from './shade';
import { Tail } from './tail';
import { Type } from './type';

export const SearchSettings = () => {
  const [_, setLocation] = useLocation();

  const isDisabledForm = useStore(model.$isDisabledForm);
  const settingsQueryString = useStore(model.$settingsQueryString);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setLocation(
      getUrlWithQs({
        url: PagesPaths.Results,
        queryString: settingsQueryString,
      }),
    );

    model.formSubmitted();
  };

  const Settings = useMemo(() => {
    return (
      <>
        <Grid item xs={6}>
          <Type />
        </Grid>
        <Grid item xs={6}>
          <Shade />
        </Grid>
        <Grid item xs={6}>
          <Tail />
        </Grid>
        <Grid item xs={6}>
          <Breed />
        </Grid>
      </>
    );
  }, []);

  return (
    <>
      <Title text="Заполните основную информацию" />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="column"
            alignItems="center"
            justifyContent="center">
            {Settings}
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isDisabledForm}>
                Поиск
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};
