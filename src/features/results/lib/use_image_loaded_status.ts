import { useCallback, useEffect, useRef, useState } from 'react';

import { loadImage } from 'shared/lib/image/load';
import { checkIsElementInViewPort } from 'shared/lib/view_port/is_in_view_port';

interface Props {
  image: string;
}

/**
 * Для загрузки изображений которые в вью порте пользователя
 * Самописная реализация взамен loading lazy изображения для ui скелетонов изображений
 * Без скелетонов будет скачек изображений банально что выглядит не корректно по ui
 */
export const useImageLoadedStatus = ({ image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isImageLoaded, setImageLoadedStatus] = useState(false);

  const setupLoadImage = async () => {
    try {
      await loadImage(image);

      setImageLoadedStatus(true);
    } catch (error) {
      setImageLoadedStatus(false);

      console.error(error);
    }

    /**
     * Ивент нам не нужен после загрузки изображения
     */
    document.removeEventListener('scroll', loadImageInViewPort);
  };

  const loadImageInViewPort = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    const isInViewPort = checkIsElementInViewPort(containerRef.current, 10);

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

    /**
     * Если компонент удален из DOM, то и лисенер снимаем
     * Например, если пользователь ушел с экрана с результатами на первичный без результатов
     */
    return () => {
      document.removeEventListener('scroll', loadImageInViewPort);
    };
  }, [image, isImageLoaded, loadImageInViewPort]);

  return { isImageLoaded, containerRef };
};
