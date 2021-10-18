import { useGate } from 'effector-react';
import { PageProps } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { searchModel } from 'shared/models/search';

import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

import { Pagination } from 'features/pagination';
import { Results } from 'features/results';
import { ScrollToTop } from 'features/scroll_to_top';
import { SearchSettings } from 'features/search_settings';

import makeFakeServer from '../requests/fake';
import '../styles.css';

makeFakeServer();

const Content = styled('div')`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
`;

const Search: React.FC<PageProps> = () => {
  useGate(searchModel.SearchGate);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KEKPETS</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <CssBaseline />
      <SearchSettings />
      <Content>
        <Results />
        <Pagination />
      </Content>
      <ScrollToTop scrollPositionThreshold={700} />
    </main>
  );
};

export default Search;
