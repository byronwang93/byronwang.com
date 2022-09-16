import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';

const Fun = ({ id }) => {
  return (
    <Flex
      flexDirection="column"
      id={id}
      backgroundColor="red"
      pt="20px"
      mt="50px"
      mb="50px"
      height="auto"
      justifyContent="center"
      width={{ base: '390px', md: '700px', lg: '900px' }}
    >
      <HeaderText text="Fun" />
      <Text></Text>
    </Flex>
  );
};

export default Fun;
