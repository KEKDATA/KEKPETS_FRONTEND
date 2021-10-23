import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { MainInfo } from 'features/results/ui/main_info';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { ImagePreview } from 'shared/ui/image_preview';

import { Result as ResultType } from 'shared/typings/results';

import { useImageLoadedStatus } from './lib/use_image_loaded_status';
import { ImageControls } from './ui/image_controls';
import { PetView } from './ui/pet_view';

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
  const { bbox, image, address, date } = result;

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

  const isMainInfoExist = address || date;

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
          {isMainInfoExist && (
            <MainInfo address={address} date={date} image={image} />
          )}
          {!isMainInfoExist && <ImageControls image={image} />}
        </CardContent>
      </Container>
    </Grid>
  );
};
