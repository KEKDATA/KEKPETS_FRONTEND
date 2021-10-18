import html2canvas from 'html2canvas';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import { sleep } from 'shared/lib/dom/sleep';

import { BBox } from 'shared/ui/bbox';
import { BBoxContainer } from 'shared/ui/bbox_container';
import { ImageView } from 'shared/ui/image_view';

interface Props {
  image: string;
  bbox: string;
}

const ImageToSaveContainer = styled('div')`
  position: absolute;
  left: -999999px;
  z-index: -1;
`;

export const SaveImage = ({ image, bbox }: Props) => {
  const [isImageDisplayed, setImageDisplayedStatus] = useState(false);

  const refImage = useRef<HTMLDivElement>(null);

  const handleSave = async () => {
    /**
     * Не очень хочется дом ноды держать постоянно.
     * Из-за этого мы на время их вставляем и затем все удаляем
     */
    setImageDisplayedStatus(true);

    /**
     * Ждем немного пока в дом залетит набор нод с изображением и Bbox
     */
    await sleep(500);

    if (!refImage.current) {
      return;
    }

    try {
      const canvas = await html2canvas(refImage.current, {
        allowTaint: true,
        useCORS: true,
      });

      let a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = `${uuidv4()}.png`;
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
    }

    setImageDisplayedStatus(false);
  };

  return (
    <>
      <Tooltip title="Сохранить изображение">
        <Fab
          color="primary"
          aria-label="Сохранить изображение"
          onClick={handleSave}>
          <FileDownloadIcon />
        </Fab>
      </Tooltip>
      {isImageDisplayed && (
        <ImageToSaveContainer ref={refImage}>
          <BBoxContainer>
            <ImageView url={image} loading="lazy" width={500} />
            <BBox coordinates={bbox} />
          </BBoxContainer>
        </ImageToSaveContainer>
      )}
    </>
  );
};
