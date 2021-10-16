import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { shadeModel } from './model';
import { options } from './options';

export const Shade = () => {
  const value = useStore(shadeModel.$value);

  const handleChange = (event: SelectChangeEvent) => {
    shadeModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Shade}
      handleChange={handleChange}
      items={options}
    />
  );
};
