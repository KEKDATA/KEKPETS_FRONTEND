import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { getButtonSize } from 'features/results/lib/button_size';
import { getIconSize } from 'features/results/lib/icon_size';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';
import { useFabColor } from 'shared/lib/theme/fab_color';

import { CopyButton } from 'shared/ui/copy_button';
import { ImagePreview } from 'shared/ui/image_preview';

import { Result as ResultType } from 'shared/typings/results';

import { useImageLoadedStatus } from './lib/use_image_loaded_status';
import { OpenImage } from './ui/open_image';
import { PetView } from './ui/pet_view';
import { SaveImage } from './ui/save_image';

interface Props {
  result: ResultType;
}

const Container = styled(Card)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? grey[800] : theme.palette.common.white,
}));

const CardImage = styled('div')`
  margin: 8px 0;
  width: 100%;
`;

export const Result = ({ result }: Props) => {
  const { bbox, image } = result;

  const fabColor = useFabColor();
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

  const sizeButton = getButtonSize({ isMobile });
  const sizeIcon = getIconSize({ isMobile });

  return (
    <Grid item>
      <Container ref={containerRef}>
        <CardContent>
          <Box
            sx={{ cursor: 'zoom-in', display: 'inline-flex', width: '100%' }}
            onClick={showPreview}>
            <CardImage>
              <PetView
                image={image}
                bbox={bbox}
                width={isMobile ? '100%' : 500}
                isImageLoaded={isImageLoaded}
              />
            </CardImage>
          </Box>
          <ImagePreview open={previewVisible} onClose={hidePreview}>
            <PetView image={image} bbox={bbox} isImageLoaded={isImageLoaded} />
          </ImagePreview>
          <Grid container spacing={2}>
            <Grid item>
              <OpenImage
                image={image}
                fabColor={fabColor}
                sizeButton={sizeButton}
                sizeIcon={sizeIcon}
              />
            </Grid>
            <Grid item>
              <CopyButton
                textToCopy={image}
                label="Копировать ссылку на изображение"
              />
            </Grid>
            <Grid item>
              <SaveImage
                image={image}
                fabColor={fabColor}
                sizeButton={sizeButton}
                sizeIcon={sizeIcon}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Container>
    </Grid>
  );
};
