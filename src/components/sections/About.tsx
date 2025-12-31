import { Flex, Text, useColorMode, Box, Image } from '@chakra-ui/react';
import React, { FC, useState, useEffect, useCallback } from 'react';
import TextAnimate from '../common/TextAnimate';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import { CommonImage } from '../../constants/images';

interface AboutProps {
  id: string;
}

const descriptions = [
  'A software developer.',
  'A caffeine enthusiast.',
  'A wannabe bowler.',
  'A cartoonist.',
];

const About: FC<AboutProps> = ({ id }) => {
  const [isEaster, setIsEaster] = useState(false);
  const { colorMode } = useColorMode();
  const [index, setIndex] = useState(0);

  const handleAnimationComplete = useCallback(() => {
    // Wait 2 seconds after animation completes, then cycle to next
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
            <TextAnimate
              text={descriptions[index]}
              animationKey={index}
              onAnimationComplete={handleAnimationComplete}
            />
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
