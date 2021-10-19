import React, { useEffect, useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';

import { isBrowser } from 'shared/lib/browser/is_browser';
import { scrollToTop } from 'shared/lib/scroll/to_top';

import { useToTopColor } from './lib/to_top_color';

interface Props {
  scrollPositionThreshold: number;
}

const ToTop = styled(Fab)`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export const ScrollToTop = ({ scrollPositionThreshold }: Props) => {
  const fabColor = useToTopColor();
  const [isVisible, setVisibleStatus] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!isBrowser) {
        return null;
      }

      setVisibleStatus(scrollPositionThreshold < window.scrollY);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [scrollPositionThreshold]);

  if (!isVisible) {
    return null;
  }

  return (
    <ToTop
      color={fabColor}
      aria-label="На верх страницы"
      onClick={scrollToTop}
      size="small">
      <ArrowUpwardIcon />
    </ToTop>
  );
};
