import { useStore } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { ResultsLoader } from './loader';
import { resultsModel } from './model';
import { NotFound } from './not_found';
import { Result } from './result';

const ResultsContainer = styled('div')`
  position: relative;
  min-height: 80vh;
`;

export const Results = () => {
  const results = useStore(resultsModel.$results);
  const isLoading = useStore(resultsModel.$isResultsLoading);
  const isSearchParamsExist = useStore(searchModel.$isSearchParamsExist);

  if (!isSearchParamsExist) {
    return null;
  }

  if (isLoading) {
    return (
      <ResultsContainer>
        <ResultsLoader />
      </ResultsContainer>
    );
  }

  if (!results) {
    return (
      <ResultsContainer>
        <NotFound />
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
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
    </ResultsContainer>
  );
};
