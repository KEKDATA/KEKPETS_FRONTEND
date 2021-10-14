import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useGate, useStore } from 'effector-react';
import React from 'react';

import { resultsModel } from './model';

const LoaderContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Results = () => {
  const results = useStore(resultsModel.$results);
  const isLoading = useStore(resultsModel.$isResultsLoading);

  useGate(resultsModel.ResultsGate);

  if (isLoading) {
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );
  }

  return <h1> kek </h1>;
};
