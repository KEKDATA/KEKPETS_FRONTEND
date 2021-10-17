import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { colorModel } from './model';

export const Color = () => {
  const value = useStore(colorModel.$value);

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
