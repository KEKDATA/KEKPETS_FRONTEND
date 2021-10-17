import { alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useMemo, VFC } from 'react';

const Shape = styled('div')(({ theme }) => ({
  position: 'absolute',
  border: `2px solid ${theme.palette.common.white}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  cursor: 'pointer',
  outlineColor: 'transparent',
  transition: theme.transitions.create(['outline-color'], {
    duration: theme.transitions.duration.short,
  }),

  '&:hover, &:focus': {
    outline: `9999px solid ${alpha(theme.palette.common.black, 0.7)}`,
  },
}));

export type BBoxProps = {
  coordinates: string;
};

export const BBox: VFC<BBoxProps> = props => {
  const { coordinates } = props;

  const [top, left, width, height] = useMemo(() => {
    return coordinates
      .split(',')
      .map(c => (Number(c) * 100).toFixed(2).concat('%'));
  }, [coordinates]);

  return (
    <Shape
      tabIndex={0}
      sx={{
        left,
        top,
        width,
        height,
      }}
    />
  );
};