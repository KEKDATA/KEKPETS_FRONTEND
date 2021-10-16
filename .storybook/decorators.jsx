import { StylesProvider } from '@material-ui/styles';
import React from 'react';

export const withMaterialStyles = storyFn => (
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
);

export default {
  withMaterialStyles,
};
