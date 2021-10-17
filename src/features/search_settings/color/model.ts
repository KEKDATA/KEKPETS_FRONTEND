import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

import { createSettingModel } from '../lib/create_setting_model';

export const colorModel = createSettingModel({
  settingType: SearchSettingsFieldsKeys.Color,
});
