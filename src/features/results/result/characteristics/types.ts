import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

export type SearchSettingsFields = Array<{
  key: SearchSettingsFieldsKeys;
  value: string;
  text: string;
}>;
