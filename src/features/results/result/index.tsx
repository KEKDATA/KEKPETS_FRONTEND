import { Box } from '@mui/material';
import React, { useState } from 'react';

import { ImagePreview } from 'shared/ui/image_preview';

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
    <div>
      <Box
        sx={{ cursor: 'zoom-in', display: 'inline-flex' }}
        onClick={showPreview}>
        <PetView image={result.image} bbox={result.bbox} />
      </Box>
      <Characteristics />

      <ImagePreview open={previewVisible} onClose={hidePreview}>
        <PetView image={result.image} bbox={result.bbox} />
      </ImagePreview>
    </div>
  );
};
