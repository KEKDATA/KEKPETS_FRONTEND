import { useGate } from 'effector-react';
import React from 'react';
import { searchModel } from 'shared/models/search';

import { Results } from 'features/results';
import { SearchSettings } from 'features/search_settings';

export const SearchPage = () => {
  useGate(searchModel.SearchGate);

  return (
    <>
      <SearchSettings />
      <Results />
    </>
  );
};
