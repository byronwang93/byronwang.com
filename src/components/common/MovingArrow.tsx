import { Icon, Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { BsArrowDown } from 'react-icons/bs';

const MovingArrow = () => {
  const targetRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      className="moveArrow fade-in"
      ref={targetRef}
    >
      <Icon
        as={BsArrowDown}
        boxSize={8}
      />
    </Box>
  );
};

export default MovingArrow;

