import React from 'react';
import { useColorMode, Box, Icon, Link, HStack } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '../assets/icons';

const navItems = [
  { text: 'about', ref: '#intro' },
  { text: 'experience', ref: '#experience' },
  { text: 'projects', ref: '#projects' },
  { text: 'fun', ref: '#fun' },
];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="section"
      pb="12px"
      fontWeight="bold"
    >
      <HStack
        spacing={{ base: '2px', md: '10px' }}
        mt="20px"
        p={{ base: '15px 15px', md: '15px 30px' }}
        borderRadius="30px"
        bg={`rgba(0, 0, 0, ${colorMode === 'dark' ? 0.3 : 0.1})`}
        justifyContent="center"
      >
        {navItems.map((item, index) => {
          return (
            <Link
              href={item.ref}
              pt="2px"
              px={{ base: '12px', almostSm: '16px', md: '24px' }}
              textDecoration="none !important"
              key={index}
              fontSize={{ base: '13px', almostSm: '17px' }}
            >
              {item.text}
            </Link>
          );
        })}
        <Icon
          mr="10px"
          verticalAlign="middle"
          boxSize={{ base: 5, md: 6 }}
          cursor="pointer"
          as={colorMode === 'light' ? SunIcon : MoonIcon}
          onClick={toggleColorMode}
        />
      </HStack>
    </Box>
  );
};

export default Navbar;
