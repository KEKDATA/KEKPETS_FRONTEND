import React from 'react';

import ImageIcon from '@mui/icons-material/Image';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';
import { useFabColor } from 'shared/lib/theme/fab_color';

import { getButtonSize } from '../../lib/button_size';
import { getIconSize } from '../../lib/icon_size';

interface Props {
  image: string;
}

export const OpenImage = ({ image }: Props) => {
  const fabColor = useFabColor();
  const isMobile = useIsMobile();

  const sizeButton = getButtonSize({ isMobile });
  const sizeIcon = getIconSize({ isMobile });

  return (
    <Tooltip title="Открыть изображение в новой вкладке">
      <Fab
        color={fabColor}
        aria-label="Открыть изображение в новой вкладке"
        target="_blank"
        href={image}
        size={sizeButton}>
        <ImageIcon fontSize={sizeIcon} />
      </Fab>
    </Tooltip>
  );
};
