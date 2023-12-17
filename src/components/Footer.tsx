import { VStack, Icon, HStack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import {
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineMail,
} from 'react-icons/ai';
import { Email, Github, Linkedin, Youtube } from '../assets/icons';

const footerIcons = [
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

// const footerIcons = [
//   { icon: AiOutlineGithub, link: 'https://github.com/byronwang93' },
//   { icon: RiLinkedinBoxFill, link: 'https://www.linkedin.com/in/byronwang93/' },
//   { icon: AiOutlineMail },
//   {
//     icon: AiOutlineYoutube,
//     link: 'https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA',
//   },
// ];

const Footer = () => {
  const date = new Date().getFullYear();
  const { colorMode } = useColorMode();

  return (
    <VStack>
      <HStack spacing="20px">
        {footerIcons.map((item, index) => {
          return (
            <Icon
              fill={colorMode === 'dark' ? 'white' : 'black'}
              stroke={colorMode === 'dark' ? 'white' : 'black'}
              key={index}
              boxSize={'50px'}
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
      <Text
        pt="10px"
        fontSize="20px"
        fontWeight="bold"
      >{`Byron Wang © ${date} :’)`}</Text>
    </VStack>
  );
};

export default Footer;
