import { VStack, Text } from '@chakra-ui/react';
import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <VStack>
      <SocialIcons
        spacing="20px"
        iconSize="35px"
      />
      <Text
        pt="10px"
        fontSize="15px"
        fontWeight="bold"
      >{`Byron Wang © ${date} :’)`}</Text>
    </VStack>
  );
};

export default Footer;
