import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

const Fun = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );

  const targetRef = useRef(null);

  const isDesktop = useBreakpointValue({ base: false, md: true });

  const [vidWidth, setVidWidth] = useState(550);

  useEffect(() => {
    if (isDesktop) setVidWidth(550);
    else setVidWidth(300);
  }, [isDesktop]);

  const videos = ['UYQfnTmqPCI', 'tHjIUg4OYU4'];

  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Flex
      className="fade-in"
      ref={targetRef}
      flexDirection="column"
      id={id}
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
        <HStack
          spacing="20px"
          justifyContent="center"
        >
          <YouTube
            videoId={videos[videoIndex]}
            opts={{
              height: '340',
              width: `${vidWidth}px`,
            }}
          />
        </HStack>
      </Box>
      <HStack
        pb="26px"
        spacing="60px"
        justifyContent="center"
      >
        <Icon
          boxSize="30px"
          as={ArrowBackIcon}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (videoIndex === 0) {
              setVideoIndex(videos.length - 1);
            } else {
              setVideoIndex(videoIndex - 1);
            }
          }}
        />
        <Icon
          boxSize="30px"
          as={ArrowForwardIcon}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (videoIndex === videos.length - 1) {
              setVideoIndex(0);
            } else {
              setVideoIndex(videoIndex + 1);
            }
          }}
        />
      </HStack>
      <Box
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
          channel to practice animating! Looking to make more fun videos in the
          future so keep checking back for updates or consider checking out my
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
