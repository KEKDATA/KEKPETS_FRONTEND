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
import { ThemeProvider } from 'features/theme_provider';
import { ThemeSwitch } from 'features/theme_switch';

import makeFakeServer from '../requests/fake';

makeFakeServer();

const Content = styled('div')(
  ({
    theme: {
      palette: { mode, common },
    },
  }) => ({
    backgroundColor: mode === 'dark' ? common.black : common.white,
  }),
);

const Search: React.FC<PageProps> = () => {
  useGate(searchModel.SearchGate);

  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KEKPETS</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <ThemeSwitch />
      <CssBaseline />
      <SearchSettings />
      <Content>
        <Results />
        <Pagination />
      </Content>
      <ScrollToTop scrollPositionThreshold={700} />
    </ThemeProvider>
  );
};

export default Search;
