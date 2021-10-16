import React from 'react';

import { ImageView } from 'shared/ui/image_view';

interface Props {
  image: string;
}

export const PetView = ({ image }: Props) => {
  return <ImageView url={image} loading="lazy" />;
};
