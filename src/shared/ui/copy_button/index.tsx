import React, { useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import { getButtonSize } from 'features/results/lib/button_size';
import { getIconSize } from 'features/results/lib/icon_size';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';
import { useFabColor } from 'shared/lib/theme/fab_color';

interface Props {
  textToCopy: string;
  label: string;
}

export const CopyButton = ({ textToCopy, label }: Props) => {
  const fabColor = useFabColor();
  const isMobile = useIsMobile();

  const [showSuccessAlert, setSuccessAlertStatus] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setSuccessAlertStatus(true);
  };

  const handleCloseBar = () => {
    setSuccessAlertStatus(false);
  };

  const sizeButton = getButtonSize({ isMobile });
  const sizeIcon = getIconSize({ isMobile });

  return (
    <>
      <Tooltip title={label}>
        <Fab
          color={fabColor}
          aria-label={label}
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
