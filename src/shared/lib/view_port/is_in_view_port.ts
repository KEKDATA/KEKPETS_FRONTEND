import { isBrowser } from 'shared/lib/browser/is_browser';

export const checkIsElementInViewPort = (
  element: HTMLElement,
  percentVisible: number,
) => {
  if (!isBrowser) {
    return null;
  }

  const rect = element.getBoundingClientRect(),
    windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return !(
    Math.floor(
      100 - ((rect.top >= 0 ? 0 : rect.top) / Number(-rect.height)) * 100,
    ) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
      percentVisible
  );
};
