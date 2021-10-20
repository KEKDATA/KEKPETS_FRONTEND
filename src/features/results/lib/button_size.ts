interface Arguments {
  isMobile: boolean;
}

export const getButtonSize = ({ isMobile }: Arguments) => {
  if (isMobile) {
    return 'small';
  }

  return 'medium';
};
