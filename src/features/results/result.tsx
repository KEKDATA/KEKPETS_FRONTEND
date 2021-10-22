import React, { useMemo, useState } from 'react';

import { Divider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';
import { useFabColor } from 'shared/lib/theme/fab_color';

import { CopyButton } from 'shared/ui/copy_button';
import { ImagePreview } from 'shared/ui/image_preview';

import { Result as ResultType } from 'shared/typings/results';

import { getButtonSize } from './lib/button_size';
import { getIconSize } from './lib/icon_size';
import { useImageLoadedStatus } from './lib/use_image_loaded_status';
import { DateInfo } from './ui/date';
import { MapLink } from './ui/map_link';
import { OpenImage } from './ui/open_image';
import { PetView } from './ui/pet_view';
import { SaveImage } from './ui/save_image';

interface Props {
  result: ResultType;
}

const Container = styled(Card)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? grey[800] : theme.palette.common.white,
}));

const CardImage = styled('div')`
  margin: 8px 0;
  width: 100%;
`;

export const Result = ({ result }: Props) => {
  const { bbox, image, address, date } = result;

  const theme = useTheme();

  const fabColor = useFabColor();
  const isMobile = useIsMobile();

  const { isImageLoaded, containerRef } = useImageLoadedStatus({
    image,
  });

  const [previewVisible, setPreviewVisible] = useState(false);

  const showPreview = () => {
    setPreviewVisible(true);
  };

  const hidePreview = () => {
    setPreviewVisible(false);
  };

  const sizeButton = getButtonSize({ isMobile });
  const sizeIcon = getIconSize({ isMobile });

  const isAddressOrDateExist = address || date;

  const Buttons = useMemo(() => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <OpenImage
            image={image}
            fabColor={fabColor}
            sizeButton={sizeButton}
            sizeIcon={sizeIcon}
          />
        </Grid>
        <Grid item>
          <CopyButton
            textToCopy={image}
            label="Копировать ссылку на изображение"
            fabColor={fabColor}
            sizeButton={sizeButton}
            sizeIcon={sizeIcon}
          />
        </Grid>
        <Grid item>
          <SaveImage
            image={image}
            fabColor={fabColor}
            sizeButton={sizeButton}
            sizeIcon={sizeIcon}
          />
        </Grid>
      </Grid>
    );
  }, [theme.palette.mode]);

  return (
    <Grid item>
      <Container ref={containerRef}>
        <CardContent>
          <Box
            sx={{ cursor: 'zoom-in', display: 'inline-flex', width: '100%' }}
            onClick={showPreview}>
            <CardImage>
              <PetView
                image={image}
                bbox={bbox}
                width={isMobile ? '100%' : 500}
                isImageLoaded={isImageLoaded}
              />
            </CardImage>
          </Box>
          <ImagePreview open={previewVisible} onClose={hidePreview}>
            <PetView image={image} bbox={bbox} isImageLoaded={isImageLoaded} />
          </ImagePreview>
          {isAddressOrDateExist && (
            <>
              <Box mb={1}>
                <Grid container flexDirection="column">
                  {date && (
                    <Grid item>
                      <Box ml={0.8}>
                        <DateInfo date={date} />
                      </Box>
                    </Grid>
                  )}
                  {address && (
                    <Grid item>
                      <MapLink address={address} />
                    </Grid>
                  )}
                </Grid>
              </Box>
              <Divider />
              <Box ml={0.5} mt={2}>
                {Buttons}
              </Box>
            </>
          )}
          {!isAddressOrDateExist && Buttons}
        </CardContent>
      </Container>
    </Grid>
  );
};
