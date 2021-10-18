import { isBrowser } from 'shared/lib/browser/is_browser';

export const scrollToTop = () => {
  if (!isBrowser) {
    return null;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
