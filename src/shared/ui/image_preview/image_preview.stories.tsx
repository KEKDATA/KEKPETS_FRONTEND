import { Story } from '@storybook/react';
import faker from 'faker';
import React, { useState } from 'react';

import Box from '@mui/material/Box';

import { PetView } from 'features/results/result/pet_view';

import { ImagePreview } from 'shared/ui/image_preview/index';

export default {
  component: ImagePreview,
  title: 'ImagePreview',
};

const Template: Story = () => {
  const [open, setOpen] = useState(false);

  const Pet = (
    <PetView
      image={faker.image.imageUrl()}
      bbox={'0.2,0.2,0.2,0.2'}
      isImageLoaded={false}
    />
  );

  return (
    <>
      <Box
        sx={{ cursor: 'zoom-in', display: 'inline-flex' }}
        onClick={() => setOpen(true)}>
        {Pet}
      </Box>
      <ImagePreview open={open} onClose={() => setOpen(false)}>
        {Pet}
      </ImagePreview>
    </>
  );
};

export const Default = Template.bind({});
