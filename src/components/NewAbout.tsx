import {
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  useColorMode,
  Box,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  Wave1,
  Wave2,
  Waving1Image,
  Waving2Image,
  LightModeDramatic,
  DarkModeDramatic,
  Star1,
  Star2,
  FirstQuestionMark,
  SecondQuestionMark,
} from '../assets/icons';
import Typist from 'react-typist';
import { useRef } from 'react';

const NewAbout = ({ id }) => {
  const iconColour = useColorModeValue('light.primary', 'dark.primary');

  const newWaving = [Waving1Image, Waving2Image];
  const waving = [Wave1, Wave2];
  const stars = [Star1, Star2];
  const questionMark = [FirstQuestionMark, SecondQuestionMark];
  const [currWave, setCurrWave] = useState(0);
  const [isEaster, setIsEaster] = useState(false);
  const { colorMode } = useColorMode();

  const descriptions = [
    'A life science student turned programmer.',
    'A caffeine enthusiast.',
    'A wannabe bowler.',
    'A (self-proclaimed) cool guy.',
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
  }, []);

  return (
    <Flex
      ref={targetRef}
      className="fade-in"
      id={id}
      flex={1}
      pt="20px"
      flexDirection="row"
    >
      <Flex
        pt={{ base: '200px', md: '230px' }}
        pl={{ base: '5px', md: '30px' }}
        // pb="280px"
        flexDirection="column"
        flexWrap="wrap"
        height="auto"
        minHeight={{ base: '70vh', md: '72vh', lg: '84vh' }}
        width={{ base: '340px', md: '460px', lg: '500px' }}
        fontWeight="700"
      >
        <Text fontSize={{ base: '25px', md: '30px' }}>Howdy! I'm</Text>
        <Text fontSize={{ base: '40px', md: '50px' }}>Byron Wang</Text>
        <Text fontSize={{ base: '25px', md: '30px' }}>
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

      {isEaster ? (
        <Box>
          <Image
            borderRadius="25%"
            w="250px"
            onClick={() => setIsEaster(false)}
            src="./EasterEggGif.gif"
            _hover={{
              cursor: 'pointer',
            }}
            mt={{ base: '130px', md: '140px', lg: '140px' }}
            display={{ base: 'none', md: 'initial' }}
          />
        </Box>
      ) : (
        <Icon
          onClick={() => setIsEaster(true)}
          cursor="pointer"
          fill={iconColour}
          strokeLinecap="round"
          strokeWidth={3}
          display={{ base: 'none', md: 'initial' }}
          mt={{ base: '100px', md: '120px', lg: '100px' }}
          as={newWaving[currWave]}
          boxSize={{ base: 200, md: 330, lg: 400 }}
          position="relative"
          right={{ base: '100px', md: '0px' }}
        />
      )}
    </Flex>
  );
};

export default NewAbout;
