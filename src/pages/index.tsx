import { useGate } from 'effector-react';
import { PageProps } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import makeFakeServer from 'requests/fake';

import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { useGoBackSearch } from 'features/go_back/use_go_back_search';
import { Pagination } from 'features/pagination';
import { Results } from 'features/results';
import { ScrollToTop } from 'features/scroll_to_top';
import { SearchSettings } from 'features/search_settings';
import { Theme } from 'features/theme';

import { searchModel } from '../entity/search';

makeFakeServer();

const fonts =
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';

const Search: React.FC<PageProps> = () => {
  useGate(searchModel.SearchGate);

  useGoBackSearch();

  return (
    <Theme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KEKPETS</title>
        <link rel="preload" href={fonts} as="style" />
        <link rel="stylesheet" href={fonts} />
      </Helmet>
      <CssBaseline />
      <SearchSettings />
      <Container maxWidth="lg">
        <Results />
        <Pagination />
      </Container>
      <ScrollToTop scrollPositionThreshold={700} />
    </Theme>
  );
};

export default Search;
