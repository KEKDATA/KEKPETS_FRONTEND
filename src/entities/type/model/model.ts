import { SearchSettingsFieldsKeys } from 'constants/search_settings_fields/keys';

import { createSettingModel } from 'shared/lib/creators/setting_model';

export const typeModel = createSettingModel({
  settingType: SearchSettingsFieldsKeys.Type,
  defaultValue: 'dog',
});
