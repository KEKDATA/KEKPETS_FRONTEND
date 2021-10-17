import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MuiButton from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';

import { scrollToTop } from 'shared/lib/scroll/to_top';

interface Props {
  scrollPositionThreshold: number;
}

const ToTop = styled(Fab)`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export const ScrollToTop = ({ scrollPositionThreshold }: Props) => {
  const [isVisible, setVisibleStatus] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (scrollPositionThreshold < window.scrollY) {
        setVisibleStatus(true);

        document.removeEventListener('scroll', onScroll);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [scrollPositionThreshold]);

  if (!isVisible) {
    return null;
  }

  return (
    <ToTop
      color="primary"
      aria-label="На верх страницы"
      onClick={scrollToTop}
      size="small">
      <ArrowUpwardIcon />
    </ToTop>
  );
};
