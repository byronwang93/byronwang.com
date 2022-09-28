import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface HeaderProps {
  text: string;
}

const HeaderText: FC<HeaderProps> = (props): JSX.Element => {
  return (
    <Flex
      flexDirection="row"
      alignSelf="center"
      mb="20px"
    >
      <Text fontSize="35px">{props.text}</Text>
    </Flex>
  );
};

export default HeaderText;
