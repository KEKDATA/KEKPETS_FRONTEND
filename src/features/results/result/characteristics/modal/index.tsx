import React, { useEffect } from 'react';

import MuiBox from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MuiModal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { SearchSettingsFields } from '../types';
import hiDogGif from './hi_dog.gif';

interface Props {
  open: boolean;
  showSubmitMessage: boolean;
  handleClose: () => void;
  handleShowSubmitMessage: () => void;
  searchSettingsFields: SearchSettingsFields;
}

const Box = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.common.white,
  width: 300,
  height: 300,
  textAlign: 'center',
  padding: 6,
}));

const CheckboxWrapper = styled('div')`
  width: 80%;
  display: flex;
`;

export const Modal = ({
  open,
  handleClose,
  searchSettingsFields,
  handleShowSubmitMessage,
  showSubmitMessage,
}: Props) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    handleShowSubmitMessage();
  };

  useEffect(() => {
    const timeoutId = setTimeout(handleClose, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showSubmitMessage]);

  return (
    <MuiModal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-describedby="Форма заполнения характеристик">
      <Box>
        {showSubmitMessage && (
          <div>
            <Typography
              gutterBottom
              align="center"
              variant="subtitle1"
              component="p">
              Спасибо за ваш отзыв!
            </Typography>
            <img src={hiDogGif} loading="lazy" alt="Пёсик шлет лучи добра" />
          </div>
        )}
        {!showSubmitMessage && (
          <>
            <Typography
              gutterBottom
              paragraph
              align="center"
              variant="subtitle1"
              component="span">
              Соответствует ли выбранным характеристикам?
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                direction="column"
                alignItems="center"
                justifyContent="center">
                {searchSettingsFields.map(setting => (
                  <CheckboxWrapper key={setting.key}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={setting.text}
                    />
                  </CheckboxWrapper>
                ))}
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  sx={{ marginTop: 2 }}>
                  Отправить отзыв
                </Button>
              </Grid>
            </form>
          </>
        )}
      </Box>
    </MuiModal>
  );
};
