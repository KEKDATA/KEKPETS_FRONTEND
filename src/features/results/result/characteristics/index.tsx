import { useStore } from 'effector-react';
import React, { useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { getButtonSize } from '../lib/button_size';
import { getIconSize } from '../lib/icon_size';
import { Modal } from './modal';
import { characteristicsModel } from './model';

export const Characteristics = () => {
  const isMobile = useIsMobile();

  const searchSettingsFields = useStore(characteristicsModel.$settings);

  const [open, setOpen] = useState(false);
  const [showSubmitMessage, setStatusShowSubmitMessage] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShowSubmitMessage = () => setStatusShowSubmitMessage(true);

  if (!searchSettingsFields) {
    return null;
  }

  const sizeButton = getButtonSize({ isMobile });
  const sizeIcon = getIconSize({ isMobile });

  return (
    <div>
      {showSubmitMessage && (
        <Tooltip title="Отзыв отправлен!">
          <Fab color="primary" aria-label="Отзыв отправлен" size={sizeButton}>
            <CheckIcon fontSize={sizeIcon} />
          </Fab>
        </Tooltip>
      )}
      {!showSubmitMessage && (
        <Tooltip title="Мы верно питомца нашли?">
          <Fab
            onClick={handleOpen}
            color="primary"
            aria-label="Открыть форму отзыва о соответствии выбранных характеристик питомца"
            size={sizeButton}>
            <FeedbackIcon fontSize={sizeIcon} />
          </Fab>
        </Tooltip>
      )}
      {open && (
        <Modal
          open={open}
          handleClose={handleClose}
          searchSettingsFields={searchSettingsFields}
          handleShowSubmitMessage={handleShowSubmitMessage}
          showSubmitMessage={showSubmitMessage}
        />
      )}
    </div>
  );
};
