import { Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';

const Experience = ({ id }) => {
  return (
    <Flex
      id={id}
      backgroundColor="beige"
      pt="20px"
      mt="50px"
      mb="50px"
      height="auto"
      justifyContent="center"
      width={{ base: '390px', md: '700px', lg: '900px' }}
    >
      <HeaderText text="Experience" />
    </Flex>
  );
};

export default Experience;
