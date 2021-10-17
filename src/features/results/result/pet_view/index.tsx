import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

import { useImageLoadedStatus } from './use_image_loaded_status';

interface Props {
  image: string;
  bbox: string;
  width?: number;
}

const Container = styled('div')`
  margin: 8px 0;
`;

export const PetView = ({ image, bbox, width }: Props) => {
  const { isImageLoaded, containerRef } = useImageLoadedStatus({
    image,
  });

  return (
    <Container ref={containerRef}>
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
          <ImageView url={image} loading="lazy" width={width} />
          <BBox coordinates={bbox} />
        </BBoxContainer>
      )}
    </Container>
  );
};
