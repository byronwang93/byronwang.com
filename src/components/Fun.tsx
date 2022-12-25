import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import YouTube from 'react-youtube';

const Fun = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );
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
        width="100%"
        //@ts-ignore
        textAlign="-webkit-center"
        pb="35px"
      >
        <YouTube
          videoId="UYQfnTmqPCI"
          opts={{
            height: '380',
            width: '80%',
          }}
        />
      </Box>
      <Box
        // width={{ base: '300px', md: '500px', lg: '700px' }}
        width={{ base: '300px', md: '400px', lg: '600px' }}
        fontSize="18px"
      >
        <Text pb="12px">
          Ever since I was a child, I’ve always had a passion for drawing,
          spending countless hours drawing comics with my brother and creating
          our own (admittingly simple) worlds.
        </Text>
        <Text>
          From the theme of my website, you can probably tell I haven’t grown
          out of the doodling phase, so as of December 2022, I started a youtube
          channel to practice animating! Looking to make more in the future so
          keep checking back here for updates or consider checking out my
          channel{' '}
          <Link
            isExternal
            href="https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA"
            color={standoutText}
          >
            here
          </Link>{' '}
          😌!
        </Text>
      </Box>
    </Flex>
  );
};

export default Fun;
