import React from 'react';
import { Route } from 'wouter';

import { PagesPaths } from 'shared/enums/pages_paths';

import { SearchPage } from './search';

export const Pages = () => {
  return (
    <>
      <Route path={PagesPaths.Search} component={SearchPage} />
    </>
  );
};
