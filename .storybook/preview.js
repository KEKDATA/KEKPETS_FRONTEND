import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';

import { withMaterialStyles } from './decorators';

addDecorator(withMaterialStyles);
// addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
addParameters({
  backgrounds: [
    { name: 'dark', value: '#202020', default: true },
    { name: 'light', value: '#FFFFFF' },
  ],
  options: { theme: themes.light },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
