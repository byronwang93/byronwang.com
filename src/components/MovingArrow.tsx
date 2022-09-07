import { Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { BsArrowDown } from 'react-icons/bs';

const MovingArrow = () => {
  return (
    <Box className="moveArrow">
      <Icon
        as={BsArrowDown}
        boxSize={8}
      />
    </Box>
  );
};

export default MovingArrow;
