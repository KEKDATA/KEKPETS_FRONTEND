import FeedbackIcon from '@mui/icons-material/Feedback';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { useStore } from 'effector-react';
import React, { useState } from 'react';

import { Modal } from './modal';
import { characteristicsModel } from './model';

export const Characteristics = () => {
  const searchSettingsFields = useStore(characteristicsModel.$settings);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!searchSettingsFields) {
    return null;
  }

  return (
    <div>
      <Tooltip title="Мы верно питомца нашли?">
        <Fab
          onClick={handleOpen}
          color="primary"
          aria-label="Открыть форму отзыва о соответствии выбранных характеристик питомца">
          <FeedbackIcon fontSize="medium" />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        handleClose={handleClose}
        searchSettingsFields={searchSettingsFields}
      />
    </div>
  );
};
