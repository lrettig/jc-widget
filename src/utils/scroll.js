import scrollparent from 'scrollparent';
import isInViewport from './isInViewport';

export function scrollIntoView(element) {
  try {
    element.scrollIntoView();
  } catch (err) {
    console.log('JustComments warning: ScrollIntoView is not supported', err);
  }
}

export function onceVisible(el, fn) {
  if (isInViewport(el)) {
    fn();
    return;
  }
  const scrollable = scrollparent(widget);
  const scrollContainers = !scrollable.parentElement
    ? [window]
    : [window, scrollable];
  const handler = () => {
    if (isInViewport(el)) {
      scrollContainers.forEach((container) => {
        container.removeEventListener('scroll', handler, false);
      });
      fn();
    }
  };
  scrollContainers.forEach((container) => {
    container.addEventListener('scroll', handler, false);
  });
}