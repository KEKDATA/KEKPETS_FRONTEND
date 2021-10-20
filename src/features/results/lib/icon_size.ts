interface Arguments {
  isMobile: boolean;
}

export const getIconSize = ({ isMobile }: Arguments) => {
  if (isMobile) {
    return 'small';
  }

  return 'medium';
};
