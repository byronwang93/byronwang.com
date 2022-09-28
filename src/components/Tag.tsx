import { Box } from '@chakra-ui/react';
import React from 'react';

interface TagProps {
  content: string;
}

const Tag = ({ content }: TagProps) => {
  return (
    <Box
      backgroundColor="#FFA0AD"
      _hover={{ backgroundColor: '#FF5970' }}
      m="3px 5px 3px 5px"
      color="white"
      borderRadius="4px"
      p="3px 7px 3px 7px"
    >
      {content}
    </Box>
  );
};

export default Tag;
