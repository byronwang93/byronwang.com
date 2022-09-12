import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface HeaderProps {
  text: string;
}

const LeftWordsHeader: FC<HeaderProps> = (props): JSX.Element => {
  return (
    <Flex
      flexDirection="row"
      alignSelf="center"
      mb="20px"
    >
      <Text fontSize="30px">{props.text}</Text>
    </Flex>
  );
};

export default LeftWordsHeader;
