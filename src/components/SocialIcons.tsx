import { HStack, Icon, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Email, Github, Linkedin } from '../assets/icons';

interface SocialIconItem {
  icon: FC;
  link?: string;
}

const socialIconsData: SocialIconItem[] = [
  { icon: Github, link: 'https://github.com/byronwang93' },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/byronwang93/',
  },
  { icon: Email },
];

interface SocialIconsProps {
  spacing?: string;
  iconSize?: string | number;
}

const SocialIcons: FC<SocialIconsProps> = ({
  spacing = '15px',
  iconSize = 10,
}) => {
  const { colorMode } = useColorMode();

  return (
    <HStack spacing={spacing}>
      {socialIconsData.map((item, index) => {
        return (
          <Icon
            fill={colorMode === 'dark' ? 'white' : 'black'}
            stroke={colorMode === 'dark' ? 'white' : 'black'}
            key={index}
            boxSize={iconSize}
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
  );
};

export default SocialIcons;

