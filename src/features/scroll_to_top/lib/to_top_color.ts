import { useTheme } from '@mui/material';

export const useToTopColor = () => {
  const theme = useTheme();

  const color = theme.palette.mode === 'dark' ? 'default' : 'primary';

  return color;
};
