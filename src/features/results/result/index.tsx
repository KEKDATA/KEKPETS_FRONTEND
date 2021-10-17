import { Box } from '@mui/material';
import React, { useState } from 'react';

import { ImagePreview } from 'shared/ui/image_preview';

import Grid from '@mui/material/Grid';

import { DownloadImage } from 'features/results/result/download_image';

import { Result as ResultType } from 'shared/typings/results';

import { Characteristics } from './characteristics';
import { PetView } from './pet_view';

interface Props {
  result: ResultType;
}

export const Result = ({ result }: Props) => {
  const [previewVisible, setPreviewVisible] = useState(false);

  const showPreview = () => {
    setPreviewVisible(true);
  };

  const hidePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <Grid item>
      <Box
        sx={{ cursor: 'zoom-in', display: 'inline-flex' }}
        onClick={showPreview}>
        <PetView image={result.image} bbox={result.bbox} />
        <ImagePreview open={previewVisible} onClose={hidePreview}>
          <PetView image={result.image} bbox={result.bbox} />
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
    </Grid>
  );
};
