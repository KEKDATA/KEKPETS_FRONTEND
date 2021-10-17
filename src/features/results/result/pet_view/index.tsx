import Skeleton from '@mui/material/Skeleton';
import React from 'react';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

import { useImageLoadedStatus } from './use_image_loaded_status';

interface Props {
  image: string;
  bbox: string;
}

export const PetView = ({ image, bbox }: Props) => {
  const { isImageLoaded, containerRef } = useImageLoadedStatus({
    image,
  });

  return (
    <div ref={containerRef}>
      {!isImageLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={500}
          height={300}
        />
      )}
      {isImageLoaded && (
        <BBoxContainer>
          <ImageView url={image} loading="lazy" width={500} />
          <BBox coordinates={bbox} />
        </BBoxContainer>
      )}
    </div>
  );
};
