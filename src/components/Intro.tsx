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
import React, { useRef, useEffect } from 'react';
import HeaderText from './HeaderText';
import { Email, Github, Linkedin, Youtube } from '../assets/icons';

const Intro = ({ id }) => {
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
      flexDirection="column"
      height="auto"
      justifyContent="center"
      width={{ base: '330px', md: '600px', lg: '800px' }}
    >
      <HeaderText text="About Me" />
      <Flex
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <VStack
          pr={{ base: '0px', almostSm: '30px' }}
          pl={{ base: '0px', almostSm: '50px' }}
          pt={{ base: '0px', md: '50px', lg: '10px' }}
        >
          <Image
            mb="10px"
            borderRadius="40px"
            // src={`../../round-coffee-picture.png`}
            src={`../../cropped-luigi.png`}
            alt="profile"
            width={{ base: '450px', sm: '650px', md: '850px' }}
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
          pl={{ base: '0px', almostSm: '20px' }}
          alignItems="baseline"
          fontSize="16px"
          spacing="20px"
          pt={{ base: '20px', md: '0px' }}
        >
          <Text fontWeight="bold">Hi there!</Text>
          <Text>
            I'm Byron, and welcome to my website! I'm a 5th year @{' '}
            <Link
              isExternal
              href="https://www.ubc.ca/"
              color={standoutText}
            >
              UBC
            </Link>{' '}
            studying Computer Science and Microbiology & Immunology. If you spot
            me outside class, you’ll likely see me in a meeting (currently a
            member of{' '}
            <Link
              isExternal
              href="https://nwplus.io/"
              color={standoutText}
            >
              nwPlus
            </Link>
            ), bowling, or sipping a coffee.
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
