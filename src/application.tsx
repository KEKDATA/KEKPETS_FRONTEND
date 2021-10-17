import { styled } from '@mui/material/styles';
import React from 'react';

import { ScrollToTop } from 'features/scroll_to_top';

import { Pages } from 'pages/pages';

const Layout = styled('div')``;

export const Application = () => {
  return (
    <Layout>
      <Pages />
      <ScrollToTop scrollPositionThreshold={500} />
    </Layout>
  );
};
