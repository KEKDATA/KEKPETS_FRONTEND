import { useCallback, useEffect, useRef, useState } from 'react';

import { loadImage } from 'shared/lib/image/load';
import { checkIsInViewPort } from 'shared/lib/view_port/is_in_view_port';

interface Props {
  image: string;
}

export const useImageLoadedStatus = ({ image }: Props) => {
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

  return { isImageLoaded, containerRef };
};
