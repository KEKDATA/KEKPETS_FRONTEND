import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

import { typeModel } from './model';
import { options } from './options';

export const Type = () => {
  const value = useStore(typeModel.$value);

  const handleChange = (event: SelectChangeEvent) => {
    typeModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label="Тип"
      handleChange={handleChange}
      items={options}
      isRequired
    />
  );
};
