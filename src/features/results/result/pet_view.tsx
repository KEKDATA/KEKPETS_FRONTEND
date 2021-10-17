import Skeleton from '@mui/material/Skeleton';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { loadImage } from 'shared/lib/image/load';
import { checkIsInViewPort } from 'shared/lib/view_port/is_in_view_port';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

interface Props {
  image: string;
  bbox: string;
}

export const PetView = ({ image, bbox }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isImageLoaded, setImageLoadedStatus] = useState(false);

  const setupLoadImage = async () => {
    try {
      await loadImage(image);

      setImageLoadedStatus(true);
    } catch (err) {
      setImageLoadedStatus(false);

      console.error(err);
    }

    document.removeEventListener('scroll', loadImageInViewPort);
  };

  const loadImageInViewPort = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    const isInViewPort = checkIsInViewPort(containerRef.current, 10);

    if (!isInViewPort) {
      return;
    }

    setupLoadImage();
  }, []);

  useEffect(() => {
    if (isImageLoaded) {
      return;
    }

    loadImageInViewPort();

    document.addEventListener('scroll', loadImageInViewPort, {
      passive: true,
    });

    return () => {
      document.removeEventListener('scroll', loadImageInViewPort);
    };
  }, [image, isImageLoaded, loadImageInViewPort]);

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
