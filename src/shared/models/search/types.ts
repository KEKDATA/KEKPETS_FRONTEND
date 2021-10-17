import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';
import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

export interface SearchSettingsFormUrl {
  [SearchSettingsFieldsKeys.Type]?: {
    key: string;
    value: SearchSettingsFieldsKeys.Type;
    text: SearchSettingsFieldsTranslates.Type;
  };
  [SearchSettingsFieldsKeys.Tail]?: {
    key: string;
    value: SearchSettingsFieldsKeys.Tail;
    text: SearchSettingsFieldsTranslates.Tail;
  };
  [SearchSettingsFieldsKeys.Color]?: {
    key: string;
    value: SearchSettingsFieldsKeys.Color;
    text: SearchSettingsFieldsTranslates.Color;
  };
  [SearchSettingsFieldsKeys.Breed]?: {
    key: string;
    value: SearchSettingsFieldsKeys.Breed;
    text: SearchSettingsFieldsTranslates.Breed;
  };
}
