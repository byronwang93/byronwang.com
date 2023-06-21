import { Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { BsArrowDown } from 'react-icons/bs';

const MovingArrow = () => {
  const targetRef = useRef(null);

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

    observer.observe(targetRef.current);

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
