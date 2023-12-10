import {
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  Box,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import { useRef } from 'react';

const NewAbout = ({ id }) => {
  const [currWave, setCurrWave] = useState(0);
  const [isEaster, setIsEaster] = useState(false);
  const { colorMode } = useColorMode();

  const descriptions = [
    'A software developer.',
    'A caffeine enthusiast.',
    'A wannabe bowler.',
    'A cartoonist.',
  ];
  const [index, setIndex] = useState(0);
  const handleChange = () => {
    if (index + 1 === descriptions.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currWave === 0) {
        setCurrWave(1);
      } else {
        setCurrWave(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currWave]);

  const targetRef = useRef(null);

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
      { threshold: 0.2 }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [colorMode]);

  return (
    <Box
      ref={targetRef}
      className="fade-in"
    >
      <Flex
        backgroundImage={{
          base: 'none',
          md: `url('${
            colorMode === 'dark'
              ? './night-background.gif'
              : './day-background.gif'
          }')`,
        }}
        backgroundSize="105%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        alignContent="center"
        id={id}
        flex={1}
        px={{ base: '0px', md: '60px' }}
        py={{ base: '40px', md: '100px' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex
          justifyContent="center"
          pl={{ base: '5px', md: '30px' }}
          flexDirection="column"
          flexWrap="wrap"
          height="auto"
          width={{ base: '330px', md: '400px', lg: '400px' }}
          fontWeight="700"
        >
          <Text fontSize="38px">Howdy! I'm</Text>
          <Text fontSize="55px">Byron Wang</Text>
          <Text fontSize={{ base: '30px', md: '34px' }}>
            <Typist
              className="typist"
              onTypingDone={handleChange}
              stdTypingDelay={25}
              key={index}
            >
              {descriptions[index]}
              <Typist.Backspace
                count={descriptions[index].length - 2}
                delay={2000}
              />
            </Typist>
          </Text>
        </Flex>

        <Box
          alignSelf="center"
          mt={{ base: '35px', md: '0px' }}
          backgroundImage={{
            base: `url('${
              colorMode === 'dark'
                ? './night-background.gif'
                : './day-background.gif'
            }')`,
            md: 'none',
          }}
          px={{ base: '30px', md: '0px' }}
          py={{ base: '30px', md: '0px' }}
          backgroundSize="235%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          alignContent="center"
        >
          {isEaster ? (
            <Image
              borderRadius="25%"
              w={{ base: '220px', md: '250px' }}
              onClick={() => setIsEaster(false)}
              src="./EasterEggGif.gif"
              _hover={{
                cursor: 'pointer',
              }}
            />
          ) : (
            <Image
              borderRadius="25%"
              // w="400px"
              w={{ base: '220px', md: '250px' }}
              onClick={() => setIsEaster(true)}
              src={colorMode === 'dark' ? './night-thin.gif' : './day-thin.gif'}
              _hover={{
                cursor: 'pointer',
              }}
              //   display={{ base: 'none', md: 'initial' }}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default NewAbout;
