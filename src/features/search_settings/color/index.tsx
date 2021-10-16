import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { colorModel } from './model';
import { options } from './options';

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
      items={options}
    />
  );
};
