import { useStore } from 'effector-react';
import React from 'react';

import PetsIcon from '@mui/icons-material/Pets';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { model } from './model';

const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  minHeight: 54,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.9,
  },
  marginTop: theme.spacing(1),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginTop: 0,
    marginLeft: theme.spacing(1),
  },
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
}));

export const Submit = () => {
  const isDisabledForm = useStore(model.$isDisabledForm);

  const theme = useTheme();

  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      size="large"
      disabled={isDisabledForm}
      endIcon={<PetsIcon />}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: theme.typography.fontWeightBold }}>
        Найти питомца
      </Typography>
    </Button>
  );
};
