import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { colorSchemeModeModel } from 'shared/models/color_scheme_mode';

import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

import dayBackground from './img/day_background_square.svg';
import nightBackground from './img/night_background_square.svg';
import nightMark from './img/night_mark.svg';
import smile from './img/smile.jpg';

const swithToLightLabel = 'Переключить на светлую тему';
const switchToDarkLabel = 'Переключить на темную тему';

const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 32,
  height: 32,
  borderRadius: '10px',
  right: 10,
  top: 10,
  backgroundImage: `url(${
    theme.palette.mode === 'dark' ? nightBackground : dayBackground
  })`,
  overflow: 'hidden',
  cursor: 'pointer',
  userSelect: 'none',
}));

const Icon = styled('div')`
  width: 20px;
  height: 20px;
  position: absolute;

  bottom: 0;

  background-position: 50%;
  background-size: cover;

  &[data-dark-mode='false'] {
    left: -1px;
    bottom: -1px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(0 0 0 / 25%), inset 0 0 10px hsl(0deg 0% 100% / 50%);
    background-image: url(${smile});
  }

  &[data-dark-mode='true'] {
    right: 0;
    background-image: url(${nightMark});
  }
`;

export const ThemeSwitch = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const isDark = useStore(colorSchemeModeModel.$isDarkTheme);

  useEffect(() => {
    colorSchemeModeModel.darkThemeChanged(prefersDarkMode);
  }, [prefersDarkMode]);

  const label = isDark ? swithToLightLabel : switchToDarkLabel;

  return (
    <Container
      aria-label={label}
      onClick={colorSchemeModeModel.darkThemeToggled}>
      <Icon data-dark-mode={isDark} />
    </Container>
  );
};
