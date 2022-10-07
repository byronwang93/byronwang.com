import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import { Carousel } from 'react-responsive-carousel';

const Fun = ({ id }) => {
  const slides = [{ image: 'test1' }, { image: 'test2' }];

  return (
    <Flex
      flexDirection="column"
      id={id}
      pt="20px"
      mt="30px"
      mb="70px"
      height="auto"
      justifyContent="center"
      width={{ base: '330px', md: '700px', lg: '900px' }}
      alignItems="center"
    >
      <HeaderText text="Fun" />
      <Box
        border="1px"
        height="300px"
        width={{ base: '100%', md: '500px', lg: '600px' }}
        mb="40px"
        borderRadius="10px"
      ></Box>
      <Box
        width={{ base: '300px', md: '400px', lg: '600px' }}
        fontSize="18px"
      >
        {/* <Carousel
          infiniteLoop
          showArrows={true}
        >
          {slides.map((slide, id) => {
            return (
              <Text
                // height="800px"
                width="800px"
                key={id}
              >
                {slide.image}
              </Text>
            );
          })}
        </Carousel> */}
        <Text pb="12px">
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
