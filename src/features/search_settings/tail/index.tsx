import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { tailModel } from './model';
import { options } from './options';

export const Tail = () => {
  const value = useStore(tailModel.$value);

  const handleChange = (event: SelectChangeEvent) => {
    tailModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Tail}
      handleChange={handleChange}
      items={options}
    />
  );
};
