import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return (
    <Typography variant="h5" component="h1" gutterBottom align="center">
      {text}
    </Typography>
  );
};
