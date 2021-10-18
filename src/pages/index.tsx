import { useGate } from 'effector-react';
import { PageProps } from 'gatsby';
import React from 'react';
import { searchModel } from 'shared/models/search';

import { Pagination } from 'features/pagination';
import { Results } from 'features/results';
import { ScrollToTop } from 'features/scroll_to_top';
import { SearchSettings } from 'features/search_settings';

import makeFakeServer from '../requests/fake';
import '../styles.css';

makeFakeServer();

const Search: React.FC<PageProps> = () => {
  useGate(searchModel.SearchGate);

  return (
    <main>
      <SearchSettings />
      <Results />
      <Pagination />
      <ScrollToTop scrollPositionThreshold={700} />
    </main>
  );
};

export default Search;
