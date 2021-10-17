import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { breedModel } from './model';

export const Breed = () => {
  const value = useStore(breedModel.$value);

  const handleChange = (event: SelectChangeEvent) => {
    breedModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Breed}
      handleChange={handleChange}
      items={searchSettingsOptions.breeds}
    />
  );
};
