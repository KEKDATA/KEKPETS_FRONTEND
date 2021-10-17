import React from 'react';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

interface Props {
  image: string;
  bbox: string;
}

export const PetView = ({ image, bbox }: Props) => {
  return (
    <BBoxContainer>
      <ImageView url={image} loading="lazy" />
      <BBox coordinates={bbox} />
    </BBoxContainer>
  );
};
