import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { breedModel } from './model';
import { options } from './options';

export const Breed = () => {
  const value = useStore(breedModel.$value);

  const handleChange = (event: SelectChangeEvent) => {
    breedModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label="Порода"
      handleChange={handleChange}
      items={options}
    />
  );
};
