import { SearchSettingsFieldsKeys } from 'shared/constants/search_settings_fields/keys';

interface Arguments {
  searchSettings: { [key: string]: string };
  requiredSettings: Array<SearchSettingsFieldsKeys.Type>;
}

export const requiredSettingsIncluded = ({
  searchSettings,
  requiredSettings,
}: Arguments) => {
  let isIncluded = true;

  for (const requiredSetting of requiredSettings) {
    const isRequiredSettingFounded = Boolean(searchSettings[requiredSetting]);

    if (!isRequiredSettingFounded) {
      isIncluded = false;
      break;
    }
  }

  return isIncluded;
};
