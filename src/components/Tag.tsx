import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface TagProps {
  content: string;
}

const Tag = ({ content }: TagProps) => {
  const tagColour = useColorModeValue('light.tagColour', 'dark.tagColour');
  const textColour = useColorModeValue(
    'light.tagTextColour',
    'dark.tagTextColour'
  );

  return (
    <Box
      backgroundColor={tagColour}
      m="3px 5px 3px 5px"
      color={textColour}
      borderRadius="4px"
      p="3px 7px 3px 7px"
    >
      {content}
    </Box>
  );
};

export default Tag;
