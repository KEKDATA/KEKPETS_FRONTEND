import { useStore } from 'effector-react';
import React from 'react';

import { SelectChangeEvent } from '@mui/material/Select';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { NativeSelect } from 'shared/ui/native_select';
import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { colorModel } from './model';

export const Color = () => {
  const value = useStore(colorModel.$value);

  const isMobile = useIsMobile();

  if (isMobile) {
    const handleChangeNative = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      colorModel.valueChanged(event.target.value);
    };

    return (
      <NativeSelect
        value={value}
        label={SearchSettingsFieldsTranslates.Color}
        handleChange={handleChangeNative}
        items={searchSettingsOptions.colors}
      />
    );
  }

  const handleChange = (event: SelectChangeEvent) => {
    colorModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Color}
      handleChange={handleChange}
      items={searchSettingsOptions.colors}
    />
  );
};
