import React, { useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  image: string;
}

export const CopyImageUrl = ({ image }: Props) => {
  const [showSuccessAlert, setSuccessAlertStatus] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(image);
    setSuccessAlertStatus(true);
  };

  const handleCloseBar = () => {
    setSuccessAlertStatus(false);
  };

  return (
    <>
      <Tooltip title="Копировать ссылку на изображение">
        <Fab
          color="primary"
          aria-label="Копировать ссылку на изображение"
          onClick={handleCopy}>
          <ContentCopyIcon />
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
