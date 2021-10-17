import { SearchSettingsFieldsKeys } from 'shared/enums/search_settings_fields/keys';

interface Arguments {
  searchSettings: { [key: string]: string };
  requiredSettings: Array<SearchSettingsFieldsKeys.Type>;
}

export const requiredSettingsIncluded = ({
  searchSettings,
  requiredSettings,
}: Arguments) => {
  let isIncluded = true;

  for (let i = 0; i < requiredSettings.length; i += 1) {
    const requiredSetting = requiredSettings[i];
    const isRequiredSettingFounded = Boolean(searchSettings[requiredSetting]);

    if (!isRequiredSettingFounded) {
      isIncluded = false;
      break;
    }
  }

  return isIncluded;
};
