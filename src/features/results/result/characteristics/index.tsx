import { useStore } from 'effector-react';
import React, { useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

import { Modal } from './modal';
import { characteristicsModel } from './model';

export const Characteristics = () => {
  const searchSettingsFields = useStore(characteristicsModel.$settings);

  const [open, setOpen] = useState(false);
  const [showSubmitMessage, setStatusShowSubmitMessage] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShowSubmitMessage = () => setStatusShowSubmitMessage(true);

  if (!searchSettingsFields) {
    return null;
  }

  return (
    <div>
      {showSubmitMessage && (
        <Tooltip title="Отзыв отправлен!">
          <Fab color="primary" aria-label="Отзыв отправлен">
            <CheckIcon />
          </Fab>
        </Tooltip>
      )}
      {!showSubmitMessage && (
        <Tooltip title="Мы верно питомца нашли?">
          <Fab
            onClick={handleOpen}
            color="primary"
            aria-label="Открыть форму отзыва о соответствии выбранных характеристик питомца">
            <FeedbackIcon fontSize="medium" />
          </Fab>
        </Tooltip>
      )}
      <Modal
        open={open}
        handleClose={handleClose}
        searchSettingsFields={searchSettingsFields}
        handleShowSubmitMessage={handleShowSubmitMessage}
        showSubmitMessage={showSubmitMessage}
      />
    </div>
  );
};
