import Box from '@mui/material/Box';
import MuiFormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import React from 'react';

import { SelectValues } from 'shared/typings/select';

interface Props {
  label: string;
  handleChange: (event: SelectChangeEvent) => void;
  items: SelectValues;
  value: string;
  isError?: boolean;
  isRequired?: boolean;
}

const FormControl = styled(MuiFormControl)`
  background-color: white;
`;

export const Select = ({
  value,
  label,
  handleChange,
  items,
  isError,
  isRequired,
}: Props) => {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl
        sx={{ m: 1, minWidth: 150 }}
        error={isError}
        required={isRequired}>
        <InputLabel id={label}>{label}</InputLabel>
        <MuiSelect
          labelId={label}
          value={value}
          label={label}
          onChange={handleChange}>
          {items.map(({ text, value }) => (
            <MenuItem key={value} value={value}>
              {text}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
