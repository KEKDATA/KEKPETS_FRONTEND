import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { SaveImage } from 'features/results/result/save_image';

import { ImagePreview } from 'shared/ui/image_preview';

import { Result as ResultType } from 'shared/typings/results';

import { Characteristics } from './characteristics';
import { CopyImageUrl } from './copy_image_url';
import { OpenImage } from './open_image';
import { PetView } from './pet_view';
import { useImageLoadedStatus } from './use_image_loaded_status';

interface Props {
  result: ResultType;
}

const Container = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[4],
}));

export const Result = ({ result }: Props) => {
  const { bbox, image } = result;

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
    <Container item ref={containerRef}>
      <Box
        sx={{ cursor: 'zoom-in', display: 'inline-flex' }}
        onClick={showPreview}>
        <PetView
          image={image}
          bbox={bbox}
          width={500}
          isImageLoaded={isImageLoaded}
        />
        <ImagePreview open={previewVisible} onClose={hidePreview}>
          <PetView image={image} bbox={bbox} isImageLoaded={isImageLoaded} />
        </ImagePreview>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Characteristics />
        </Grid>
        <Grid item>
          <OpenImage image={image} />
        </Grid>
        <Grid item>
          <CopyImageUrl image={image} />
        </Grid>
        <Grid item>
          <SaveImage image={image} bbox={bbox} />
        </Grid>
      </Grid>
    </Container>
  );
};
