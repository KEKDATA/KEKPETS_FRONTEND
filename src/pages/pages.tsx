import React from 'react';
import { UrlPaths } from 'shared/enums/url_paths';
import { Route } from 'wouter';

import { ResultsPage } from './results';
import { SearchSettingsPage } from './search_settings';

export const Pages = () => {
  return (
    <>
      <Route path={UrlPaths.SearchSettings} component={SearchSettingsPage} />
      <Route path={UrlPaths.Results} component={ResultsPage} />
    </>
  );
};
