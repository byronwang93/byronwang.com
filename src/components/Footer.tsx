import { VStack, Icon, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import {
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineMail,
} from 'react-icons/ai';

const footerIcons = [
  { icon: AiOutlineGithub, link: 'https://github.com/byronwang93' },
  { icon: RiLinkedinBoxFill, link: 'https://www.linkedin.com/in/byronwang93/' },
  { icon: AiOutlineMail },
  {
    icon: AiOutlineYoutube,
    link: 'https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA',
  },
];

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <VStack>
      <HStack spacing="15px">
        {footerIcons.map((item, index) => {
          return (
            <Icon
              key={index}
              boxSize={5}
              as={item.icon}
              cursor="pointer"
              onClick={(e) => {
                if (!item.link) {
                  window.location.href = 'mailto:byronwang93@gmail.com';
                } else {
                  window.location.href = item.link;
                }
              }}
            />
          );
        })}
      </HStack>
      <Text>{`Byron Wang © ${date} :’)`}</Text>
    </VStack>
  );
};

export default Footer;
