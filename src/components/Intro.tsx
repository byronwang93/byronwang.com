import {
  Flex,
  Image,
  Text,
  Link,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import HeaderText from './HeaderText';
import { Email, Github, Linkedin, Youtube } from '../assets/icons';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface IntroProps {
  id: string;
}

const Intro: FC<IntroProps> = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );

  const { colorMode } = useColorMode();

  const socialIcons = [
    { icon: Github, link: 'https://github.com/byronwang93' },
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/byronwang93/',
    },
    { icon: Email },
    {
      icon: Youtube,
      link: 'https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA',
    },
  ];

  // const socialIcons = [
  //   { icon: AiOutlineGithub, link: 'https://github.com/byronwang93' },
  //   {
  //     icon: RiLinkedinBoxFill,
  //     link: 'https://www.linkedin.com/in/byronwang93/',
  //   },
  //   { icon: AiOutlineMail },
  //   {
  //     icon: AiOutlineYoutube,
  //     link: 'https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA',
  //   },
  // ];

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
            src={`../../pfp-cropped.JPEG`}
            alt="profile"
            width={{ base: '100%', md: '280px', lg: '350px' }}
            maxWidth="100%"
            loading="eager"
          />
          <HStack spacing="15px">
            {socialIcons.map((item, index) => {
              return (
                <Icon
                  fill={colorMode === 'dark' ? 'white' : 'black'}
                  stroke={colorMode === 'dark' ? 'white' : 'black'}
                  key={index}
                  boxSize={10}
                  as={item.icon}
                  cursor="pointer"
                  onClick={() => {
                    if (!item.link) {
                      window.open('mailto:byronwang93@gmail.com');
                    } else {
                      window.open(item.link);
                    }
                  }}
                />
              );
            })}
          </HStack>
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
            Immunology. If you spot me outside work, you’ll likely see me
            doodling, bowling, or sipping a coffee.
          </Text>
          <Text>
            I'll be using this website as a random canvas for life updates,
            projects, and any random thoughts so feel free to poke around!
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
