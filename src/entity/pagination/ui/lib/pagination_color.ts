import { useTheme } from '@mui/material';

export const usePaginationColor = () => {
  const theme = useTheme();

  const color = theme.palette.mode === 'dark' ? 'standard' : 'primary';

  return color;
};
