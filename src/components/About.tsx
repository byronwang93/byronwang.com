import { Flex, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Wave1, Wave2, Star1, Star2 } from '../assets/icons';
import Typist from 'react-typist';

const About = ({ id }) => {
  const iconColour = useColorModeValue('light.primary', 'dark.primary');

  const waving = [Wave1, Wave2];
  const stars = [Star1, Star2];
  const [currWave, setCurrWave] = useState(0);

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

  return (
    <Flex
      id={id}
      flex={1}
      pt="20px"
      flexDirection="row"
    >
      <Flex
        pt="170px"
        pl="5px"
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
            <Text color="#4285f4">BY</Text>
            <Text
              color="#ea4335"
              pr="10px"
            >
              RON
            </Text>
            <Text color="#fbbc05">WA</Text>
            <Text color="#34a853">NG</Text>
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
      <Icon
        stroke={iconColour}
        strokeLinecap="round"
        strokeWidth={3}
        display={{ base: 'none', md: 'initial' }}
        mt={{ base: '100px', md: '160px', lg: '110px' }}
        as={waving[currWave]}
        boxSize={{ base: 200, md: 280, lg: 350 }}
      />
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
