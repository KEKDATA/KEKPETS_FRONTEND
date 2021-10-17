import { styled } from '@mui/material/styles';
import { useGate } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

import { Results } from 'features/results';
import { SearchSettings } from 'features/search_settings';

const ResultsContainer = styled('div')`
  position: relative;
  min-height: 80vh;
`;

export const SearchPage = () => {
  useGate(searchModel.SearchGate);

  return (
    <>
      <SearchSettings />
      <ResultsContainer>
        <Results />
      </ResultsContainer>
    </>
  );
};
