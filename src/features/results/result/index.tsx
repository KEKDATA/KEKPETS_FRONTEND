import React, { useState } from 'react';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import { DownloadImage } from 'features/results/result/download_image';
import { useImageLoadedStatus } from 'features/results/result/use_image_loaded_status';

import { ImagePreview } from 'shared/ui/image_preview';

import { Result as ResultType } from 'shared/typings/results';

import { Characteristics } from './characteristics';
import { PetView } from './pet_view';

interface Props {
  result: ResultType;
}

export const Result = ({ result }: Props) => {
  const { isImageLoaded, containerRef } = useImageLoadedStatus({
    image: result.image,
  });

  const [previewVisible, setPreviewVisible] = useState(false);

  const showPreview = () => {
    setPreviewVisible(true);
  };

  const hidePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <Grid item ref={containerRef}>
      <Box
        sx={{ cursor: 'zoom-in', display: 'inline-flex' }}
        onClick={showPreview}>
        <PetView
          image={result.image}
          bbox={result.bbox}
          width={500}
          isImageLoaded={isImageLoaded}
        />
        <ImagePreview open={previewVisible} onClose={hidePreview}>
          <PetView
            image={result.image}
            bbox={result.bbox}
            isImageLoaded={isImageLoaded}
          />
        </ImagePreview>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Characteristics />
        </Grid>
        <Grid item>
          <DownloadImage image={result.image} />
        </Grid>
      </Grid>

      <ImagePreview open={previewVisible} onClose={hidePreview}>
        <PetView image={result.image} bbox={result.bbox} />
      </ImagePreview>
    </Grid>
  );
};
