import React from 'react';
import { PagesPaths } from 'shared/enums/pages_paths';
import { Route } from 'wouter';

import { ResultsPage } from './results';
import { SearchSettingsPage } from './search_settings';

export const Pages = () => {
  return (
    <>
      <Route path={PagesPaths.SearchSettings} component={SearchSettingsPage} />
      <Route path={PagesPaths.Results} component={ResultsPage} />
    </>
  );
};
