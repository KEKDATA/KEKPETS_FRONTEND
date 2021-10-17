import faker from 'faker';
import React from 'react';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

export default {
  title: 'BBox',
};

export const Default = () => {
  return (
    <BBoxContainer>
      <ImageView url={faker.image.imageUrl()} />
      <BBox coordinates="0.5,0.5,0.1,0.1" />
    </BBoxContainer>
  );
};
