import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';

const Intro = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );
  return (
    <Flex
      id={id}
      flex={1}
      pt="20px"
      mt="70px"
      mb="70px"
      flexDirection="column"
      height="auto"
      justifyContent="center"
      width={{ base: '360px', md: '700px', lg: '950px' }}
    >
      <HeaderText text="About Me" />
      <Flex
        pt="20px"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'normal' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box boxSize={340}>
          <Image
            pr={{ md: '40px' }}
            borderRadius="full"
            src={`../../round-coffee-picture.png`}
            alt="profile"
          />
        </Box>
        <Box
          pt={{ base: '30px', md: '0' }}
          pl="20px"
          fontSize="20px"
          width={{ md: '50%' }}
        >
          <Text>
            Hey, I’m Byron, and welcome to my website (version 2)! I’m an 4th
            year studying a combined major of Computer Science and Microbiology
            & Immunology @{' '}
            <Link
              isExternal
              href="https://www.ubc.ca/"
              color={standoutText}
            >
              UBC
            </Link>{' '}
            with a passion for tech. If you spot me outside of the coding booth,
            you’ll likely see me in a meeting (currently a member of{' '}
            <Link
              isExternal
              href="https://nwplus.io/"
              color={standoutText}
            >
              nwPlus
            </Link>{' '}
            and the{' '}
            <Link
              isExternal
              href="https://ubccsss.org/"
              color={standoutText}
            >
              Computer Science Student Society
            </Link>
            ), playing ping pong, or sipping a coffee.
          </Text>
          <br />
          <Text>
            I’ll be using this webpage as a personal portfolio on life updates,
            projects, and a canvas for all the random thoughts that my brain
            cycles through, so feel free to poke around!
          </Text>
          <br />
          <Text>
            I really appreciate your time and I’m always down to meet
            like-minded individuals so if want to contact me, shoot me an email
            through my{' '}
            <Link
              href="#contact-me"
              color={standoutText}
            >
              contact form
            </Link>{' '}
            or through my socials (linked in the footer)! :’)
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Intro;
