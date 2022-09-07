import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Wave1, Wave2, Star1, Star2 } from '../assets/icons';
import Typist from 'react-typist';

const About = () => {
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
      flex={1}
      pt="20px"
      flexDirection="row"
      maxWidth={{ base: '90%' }}
      minWidth={{ base: '90%', md: '100%', lg: '100%' }}
    >
      <Flex
        pt="170px"
        alignItems="flex-start"
        flexDirection="column"
        flexWrap="wrap"
        height="84vh"
        width={{ base: '390px', md: '450px' }}
      >
        <Text fontSize={{ base: '15px', lg: '20px' }}>Howdy peeps! I'm</Text>
        <Text
          pt="50px"
          pb="50px"
          fontSize={{ base: '30px', lg: '50px' }}
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
        <Text fontSize={{ base: '15px', lg: '20px' }}>
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
        mt="100px"
        as={waving[currWave]}
        boxSize={350}
      />
      <Icon
        position="absolute"
        mt="100px"
        ml="50px"
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        position="absolute"
        mt="500px"
        ml="410px"
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        position="absolute"
        mt="180px"
        ml="850px"
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        position="absolute"
        mt="630px"
        ml="750px"
        as={stars[currWave]}
        boxSize={5}
      />
      <Icon
        position="absolute"
        mt="580px"
        as={stars[currWave]}
        boxSize={5}
      />
    </Flex>
  );
};

export default About;
