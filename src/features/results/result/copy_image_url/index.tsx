import React, { useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { getButtonSize } from '../lib/button_size';
import { useFabColor } from '../lib/fab_color';
import { getIconSize } from '../lib/icon_size';

interface Props {
  image: string;
}

export const CopyImageUrl = ({ image }: Props) => {
  const fabColor = useFabColor();
  const isMobile = useIsMobile();

  const [showSuccessAlert, setSuccessAlertStatus] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(image);
    setSuccessAlertStatus(true);
  };

  const handleCloseBar = () => {
    setSuccessAlertStatus(false);
  };

  const sizeButton = getButtonSize({ isMobile });
  const sizeIcon = getIconSize({ isMobile });

  return (
    <>
      <Tooltip title="Копировать ссылку на изображение">
        <Fab
          color={fabColor}
          aria-label="Копировать ссылку на изображение"
          onClick={handleCopy}
          size={sizeButton}>
          <ContentCopyIcon fontSize={sizeIcon} />
        </Fab>
      </Tooltip>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={6000}
        onClose={handleCloseBar}>
        <Alert
          onClose={handleCloseBar}
          severity="success"
          sx={{ width: '100%' }}>
          Ссылка скопирована!
        </Alert>
      </Snackbar>
    </>
  );
};
