import React, { useState } from 'react';

import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { CopyButton } from 'shared/ui/copy_button';
import { ImagePreview } from 'shared/ui/image_preview';

import { Result as ResultType } from 'shared/typings/results';

import { OpenImage } from './open_image';
import { PetView } from './pet_view';
import { SaveImage } from './save_image';
import { useImageLoadedStatus } from './use_image_loaded_status';

interface Props {
  result: ResultType;
}

const Container = styled(Card)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? grey[800] : theme.palette.common.white,
}));

export const Result = ({ result }: Props) => {
  const { bbox, image } = result;

  const isMobile = useIsMobile();

  const { isImageLoaded, containerRef } = useImageLoadedStatus({
    image,
  });

  const [previewVisible, setPreviewVisible] = useState(false);

  const showPreview = () => {
    setPreviewVisible(true);
  };

  const hidePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <Grid item>
      <Container ref={containerRef}>
        <CardContent>
          <Box
            sx={{ cursor: 'zoom-in', display: 'inline-flex', width: '100%' }}
            onClick={showPreview}>
            <PetView
              image={image}
              bbox={bbox}
              width={isMobile ? '100%' : 500}
              isImageLoaded={isImageLoaded}
            />
          </Box>
          <ImagePreview open={previewVisible} onClose={hidePreview}>
            <PetView image={image} bbox={bbox} isImageLoaded={isImageLoaded} />
          </ImagePreview>
          <Grid container spacing={2}>
            <Grid item>
              <OpenImage image={image} />
            </Grid>
            <Grid item>
              <CopyButton
                textToCopy={image}
                label="Копировать ссылку на изображение"
              />
            </Grid>
            <Grid item>
              <SaveImage image={image} bbox={bbox} />
            </Grid>
          </Grid>
        </CardContent>
      </Container>
    </Grid>
  );
};
