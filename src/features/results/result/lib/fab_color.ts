import { useTheme } from '@mui/material';

export const useFabColor = () => {
  const theme = useTheme();

  const color = theme.palette.mode === 'dark' ? 'default' : 'primary';

  return color;
};
