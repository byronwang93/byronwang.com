import {
  Flex,
  Image,
  Text,
  Link,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import HeaderText from '../common/HeaderText';
import SocialIcons from '../common/SocialIcons';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import { CommonImage } from '../../constants/images';

interface IntroProps {
  id: string;
}

const Intro: FC<IntroProps> = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );

  const targetRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <Flex
      ref={targetRef}
      className="fade-in"
      id={id}
      flex={1}
      pt="20px"
      flexDirection="column"
      height="auto"
      justifyContent="center"
      width={{ base: '330px', md: '600px', lg: '800px' }}
    >
      <HeaderText text="About Me" />
      <Flex
        justifyContent="center"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <VStack
          pt={{ base: '0px', md: '50px', lg: '10px' }}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            mb="10px"
            borderRadius="20px"
            src={CommonImage.PFP_CROPPED}
            alt="profile"
            width={{ base: '100%', md: '280px', lg: '350px' }}
            maxWidth="100%"
            loading="eager"
          />
          <SocialIcons
            spacing="15px"
            iconSize={10}
          />
        </VStack>
        <VStack
          pl={{ base: '0px', md: '30px' }}
          alignItems="baseline"
          fontSize="16px"
          spacing="20px"
          pt={{ base: '20px', md: '0px' }}
          maxW={{ base: '100%', lg: '420px' }}
        >
          <Text fontWeight="bold">Hi there!</Text>
          <Text>
            I'm Byron, and welcome to my website! I'm a @{' '}
            <Link
              isExternal
              href="https://www.ubc.ca/"
              color={standoutText}
            >
              UBC
            </Link>{' '}
            grad with a Bachelors in Computer Science and Microbiology &
            Immunology and am currently a Software Engineer at{' '}
            <Link
              isExternal
              href="https://www.astronomer.io/"
              color={standoutText}
            >
              Astronomer
            </Link>
            .
          </Text>
          <Text>
            If you like what you see and want to chat, my socials are underneath
            my profile picture and in the footer so reach out! Down to coffee
            chat anytime :')
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Intro;
