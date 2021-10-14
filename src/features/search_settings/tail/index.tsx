import { SelectChangeEvent } from '@mui/material/Select';
import { useStore } from 'effector-react';
import React from 'react';

import { Select } from 'shared/ui/select';

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
      label="Хвост"
      handleChange={handleChange}
      items={options}
    />
  );
};
