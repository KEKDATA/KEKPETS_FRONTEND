import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

interface Props {
  image: string;
  bbox: string;
  isImageLoaded: boolean;
  width?: number | string;
}

const Container = styled('div')`
  margin: 8px 0;
  width: 100%;
`;

export const PetView = ({ image, bbox, width, isImageLoaded }: Props) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      {!isImageLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={isMobile ? undefined : 500}
          height={isMobile ? 200 : 300}
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
