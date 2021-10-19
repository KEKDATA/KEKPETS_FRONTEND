import { createEvent, createStore } from 'effector';

import { isBrowser } from 'shared/lib/browser/is_browser';

const isDark = isBrowser
  ? window.matchMedia('(prefers-color-scheme: dark)').matches
  : false;

const darkThemeToggled = createEvent<unknown>();
const darkThemeChanged = createEvent<boolean>();

const $isDarkTheme = createStore(isDark)
  .on(darkThemeToggled, prev => !prev)
  .on(darkThemeChanged, (_, isDarkSelected) => isDarkSelected);

export const colorSchemeModeModel = {
  darkThemeToggled,
  darkThemeChanged,
  $isDarkTheme,
};
