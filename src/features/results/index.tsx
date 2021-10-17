import Grid from '@mui/material/Grid';
import { useStore } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

import { ResultsLoader } from './loader';
import { resultsModel } from './model';
import { NotFound } from './not_found';
import { Result } from './result';

export const Results = () => {
  const results = useStore(resultsModel.$results);
  const isLoading = useStore(resultsModel.$isResultsLoading);
  const isSearchParamsExist = useStore(searchModel.$isSearchParamsExist);

  if (!isSearchParamsExist) {
    return null;
  }

  if (isLoading) {
    return <ResultsLoader />;
  }

  if (!results) {
    return <NotFound />;
  }

  return (
    <Grid
      rowSpacing={3}
      container
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      flexWrap="wrap">
      {results.map(result => (
        <Result key={result.id} result={result} />
      ))}
    </Grid>
  );
};
