import { searchModel } from 'shared/models/search';

import { SearchSettingsFields } from './types';

const $settings = searchModel.$searchSettingsFieldsFromUrl.map(settings =>
  settings ? (Object.values(settings) as SearchSettingsFields) : null,
);

export const characteristicsModel = { $settings };
