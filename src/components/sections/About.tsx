import { Flex, Text, useColorMode, Box, Image } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import Typist from 'react-typist';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import { CommonImage } from '../../constants/images';

interface AboutProps {
  id: string;
}

const About: FC<AboutProps> = ({ id }) => {
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

  const targetRef = useFadeInOnScroll<HTMLDivElement>();

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
              ? CommonImage.NIGHT_BACKGROUND
              : CommonImage.DAY_BACKGROUND
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
          width={{ base: '330px', md: '410px', lg: '410px' }}
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
                ? CommonImage.NIGHT_BACKGROUND
                : CommonImage.DAY_BACKGROUND
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
              my={{ base: '59px', md: '67px' }}
              borderRadius="25%"
              w={{ base: '220px', md: '250px' }}
              onClick={() => setIsEaster(false)}
              src={CommonImage.EASTER_EGG}
              alt="easter egg animation"
              loading="lazy"
              _hover={{
                cursor: 'pointer',
              }}
            />
          ) : (
            <Image
              borderRadius="25%"
              w={{ base: '220px', md: '250px' }}
              onClick={() => setIsEaster(true)}
              src={
                colorMode === 'dark'
                  ? CommonImage.NIGHT_THIN
                  : CommonImage.DAY_THIN
              }
              alt="animated avatar"
              loading="eager"
              _hover={{
                cursor: 'pointer',
              }}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
