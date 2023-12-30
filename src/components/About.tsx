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
  Star1,
  Star2,
  FirstQuestionMark,
  SecondQuestionMark,
} from '../assets/icons';
import Typist from 'react-typist';
import { useRef } from 'react';

const About = ({ id }) => {
  const iconColour = useColorModeValue('light.primary', 'dark.primary');

  const newWaving = [Waving1Image, Waving2Image];
  const waving = [Wave1, Wave2];
  const stars = [Star1, Star2];
  const questionMark = [FirstQuestionMark, SecondQuestionMark];
  const [currWave, setCurrWave] = useState(0);
  const [isEaster, setIsEaster] = useState(false);
  const { colorMode } = useColorMode();

  const descriptions = [
    'A life science student turned programmer. 👾',
    'A caffeine enthusiast. ☕️',
    'A wannabe ping pong player. 🏓',
    'A (self-proclaimed) cool guy. 😎',
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
        pt="170px"
        pl={{ base: '5px', md: '30px' }}
        pb="280px"
        flexDirection="column"
        flexWrap="wrap"
        height="auto"
        minHeight={{ base: '70vh', md: '72vh', lg: '84vh' }}
        width={{ base: '340px', md: '460px', lg: '500px' }}
      >
        <Text fontSize={{ base: '25px', md: '20px' }}>Howdy peeps! I'm</Text>
        <Text
          pt="50px"
          pb="50px"
          fontSize={{ base: '45px', md: '50px' }}
          className="name"
        >
          <HStack spacing="0">
            <Text color="#4285f4">By</Text>
            <Text
              color="#ea4335"
              pr="10px"
            >
              ron
            </Text>
            <Text color="#fbbc05">Wa</Text>
            <Text color="#34a853">ng</Text>
          </HStack>
        </Text>
        <Text fontSize={{ base: '25px', md: '20px' }}>
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
          {/* <Icon
            as={questionMark[currWave]}
            stroke={iconColour}
            strokeLinecap="round"
            strokeWidth={4}
            boxSize={20}
            position="absolute"
            ml={{ md: '200px', lg: '270px' }}
            mt={{ md: '90px', lg: '100px' }}
            display={{ base: 'none', md: 'initial' }}
          ></Icon>
          <Icon
            as={questionMark[currWave]}
            stroke={iconColour}
            strokeLinecap="round"
            strokeWidth={4}
            boxSize={20}
            position="absolute"
            ml={'-20px'}
            mt={'330px'}
            display={{ base: 'none', md: 'initial' }}
          ></Icon>
          <Icon
            as={colorMode === 'light' ? LightModeDramatic : DarkModeDramatic}
            stroke={iconColour}
            cursor="pointer"
            strokeWidth={5}
            strokeLinecap="round"
            onClick={() => setIsEaster(false)}
            // boxSize={{ base: 200, md: 280, lg: 350 }}
            boxSize={{ base: 200, md: 330, lg: 400 }}
            mt={{ base: '100px', md: '130px', lg: '110px' }}
            display={{ base: 'none', md: 'initial' }}
          ></Icon> */}
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
      <Icon
        stroke={iconColour}
        strokeWidth={2.5}
        position="absolute"
        mt="100px"
        ml="50px"
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        stroke={iconColour}
        strokeWidth={2.5}
        position="absolute"
        mt={{ base: '440px', md: '500px' }}
        ml={{ base: '300px', md: '410px' }}
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        stroke={iconColour}
        strokeWidth={2.5}
        display={{ base: 'none', lg: 'initial' }}
        position="absolute"
        mt="180px"
        ml="850px"
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        stroke={iconColour}
        strokeWidth={2.5}
        display={{ base: 'none', md: 'initial' }}
        position="absolute"
        mt={{ base: '50px', lg: '630px' }}
        ml={{ base: '640px', lg: '750px' }}
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        stroke={iconColour}
        strokeWidth={2.5}
        position="absolute"
        mt="580px"
        ml="20px"
        as={stars[currWave]}
        boxSize={5}
      />
    </Flex>
  );
};

export default About;
