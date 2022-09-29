import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';

const Fun = ({ id }) => {
  return (
    <Flex
      flexDirection="column"
      id={id}
      backgroundColor="beige"
      pt="20px"
      mt="50px"
      mb="50px"
      height="auto"
      justifyContent="center"
      width={{ base: '390px', md: '700px', lg: '900px' }}
      alignItems="center"
    >
      <HeaderText text="Fun" />
      <Box
        width={{ base: '200px', md: '400px', lg: '600px' }}
        fontSize="18px"
      >
        <Text pb="10px">
          Ever since I was a child, I’ve always had a passion for drawing,
          spending countless hours drawing comics with my brother and creating
          our own (admittingly simple) worlds.
        </Text>
        <Text>
          From the theme of my website, you can probably tell I haven’t grown
          out of the doodling phase, so a goal for this year is to learn how to
          animate! If I end up following through, here’s where I’ll be linking
          the videos so keep checking back for future updates!
        </Text>
      </Box>
    </Flex>
  );
};

export default Fun;
