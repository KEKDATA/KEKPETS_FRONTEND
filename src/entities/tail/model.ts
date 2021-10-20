import { SearchSettingsFieldsKeys } from 'constants/search_settings_fields/keys';

import { createSettingModel } from 'shared/lib/creators/setting_model';

export const tailModel = createSettingModel({
  settingType: SearchSettingsFieldsKeys.Tail,
});
