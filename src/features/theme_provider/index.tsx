import { useStore } from 'effector-react';
import React, { FC, useMemo } from 'react';
import { colorSchemeModeModel } from 'shared/models/color_scheme_mode';

import { blue, grey, orange } from '@mui/material/colors';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

export const ThemeProvider: FC = ({ children }) => {
  const isDarkMode = useStore(colorSchemeModeModel.$isDarkTheme);

  const theme = useMemo(() => {
    return createTheme({
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: `${
                isDarkMode ? grey[900] : blue[600]
              } !important`,
              minHeight: '100vh',
            },
          },
        },
      },
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
        secondary: {
          main: orange[800],
        },
        common: {
          black: grey[900],
        },
      },
    });
  }, [isDarkMode]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
