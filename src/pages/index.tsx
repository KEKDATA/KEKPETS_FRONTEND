import { PageProps } from 'gatsby';
import React from 'react';

import { ScrollToTop } from 'features/scroll_to_top';

import { SearchPage } from 'pages/search';

import makeFakeServer from '../requests/fake';
import '../styles.css';

makeFakeServer();

const Search: React.FC<PageProps> = () => (
  <main>
    <SearchPage />
    <ScrollToTop scrollPositionThreshold={700} />
  </main>
);

export default Search;
