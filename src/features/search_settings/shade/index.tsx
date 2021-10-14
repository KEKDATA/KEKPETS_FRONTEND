import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

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
      label="Оттенок"
      handleChange={handleChange}
      items={options}
    />
  );
};
