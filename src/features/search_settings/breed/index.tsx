import { useStore } from 'effector-react';
import React, { useState } from 'react';

import MuiAutocomplete from '@mui/material/Autocomplete';
import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { breedModel } from './model';

const normalizedOptions = searchSettingsOptions.breeds.map(({ text }) => text);

const Autocomplete = styled(MuiAutocomplete)(
  ({
    theme: {
      breakpoints,
      spacing,
      shape: { borderRadius },
      palette: { mode, common },
    },
  }) => ({
    marginTop: spacing(0.2),
    borderRadius,
    backgroundColor: mode === 'dark' ? common.black : common.white,
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 482,
    },
  }),
);

const TextField = styled(MuiTextField)(
  ({
    theme: {
      palette: { mode, common },
    },
  }) => ({
    '& .MuiFilledInput-root': {
      background: mode === 'dark' ? common.black : common.white,
    },
  }),
);

export const Breed = () => {
  const [inputValue, setInputValue] = useState('');
  const value = useStore(breedModel.$autoCompleteValue);

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue: string | null) => {
        breedModel.autoCompleteValueChanged(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={normalizedOptions}
      renderInput={params => (
        <TextField
          {...params}
          variant="filled"
          label={SearchSettingsFieldsTranslates.Breed}
          color="primary"
        />
      )}
    />
  );
};
