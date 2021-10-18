import React from 'react';

import Box from '@mui/material/Box';
import MuiFormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiNativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';

import { SelectValues } from 'shared/typings/select';

interface Props {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  items: SelectValues;
  value: string;
  isError?: boolean;
  isRequired?: boolean;
}

const FormControl = styled(MuiFormControl)`
  background-color: white;
`;

export const NativeSelect = ({
  value,
  label,
  handleChange,
  items,
  isError,
  isRequired,
}: Props) => {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth error={isError} required={isRequired}>
        <InputLabel
          variant="standard"
          htmlFor={label}
          sx={{ paddingLeft: '6px', paddingTop: '4px' }}>
          {label}
        </InputLabel>
        <MuiNativeSelect
          inputProps={{
            name: label,
            id: label,
          }}
          value={value}
          onChange={handleChange}>
          {items.map(({ text, value }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </MuiNativeSelect>
      </FormControl>
    </Box>
  );
};
