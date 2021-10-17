import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { tailModel } from './model';

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
      items={searchSettingsOptions.tails}
    />
  );
};
