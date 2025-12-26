import { useRef, useEffect, RefObject } from 'react';

interface UseFadeInOnScrollOptions {
  threshold?: number;
}

export const useFadeInOnScroll = <T extends HTMLElement>(
  options: UseFadeInOnScrollOptions = {}
): RefObject<T> => {
  const { threshold = 0.2 } = options;
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return targetRef;
};
