import { useStore } from 'effector-react';
import React from 'react';

import PetsIcon from '@mui/icons-material/Pets';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { model } from './model';

export const Submit = () => {
  const isDisabledForm = useStore(model.$isDisabledForm);

  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      size="large"
      disabled={isDisabledForm}
      endIcon={<PetsIcon />}
      sx={{
        backgroundColor: '#f26e36',
        minHeight: 54,
        '&:hover': {
          backgroundColor: '#f26e36',
          opacity: 0.9,
        },
      }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Найти питомца
      </Typography>
    </Button>
  );
};
