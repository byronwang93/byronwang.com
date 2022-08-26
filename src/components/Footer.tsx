import { VStack, Icon, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import {
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineMail,
} from 'react-icons/ai';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <VStack>
      <HStack spacing="15px">
        <Icon
          boxSize={5}
          as={AiOutlineGithub}
        />
        <Icon
          boxSize={5}
          as={RiLinkedinBoxFill}
        />
        <Icon
          boxSize={5}
          as={AiOutlineMail}
        />
        <Icon
          boxSize={5}
          as={AiOutlineYoutube}
        />
      </HStack>
      <Text>{`Byron Wang © ${date} :’)`}</Text>
    </VStack>
  );
};

export default Footer;
