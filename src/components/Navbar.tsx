import React from 'react';
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Icon,
  Link,
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { SunIcon } from '../assets/icons';

const navItems = [
  { text: 'About', ref: '#about' },
  { text: 'Experience', ref: '#experience' },
  { text: 'Projects', ref: '#projects' },
  { text: 'Fun', ref: '#fun' },
  { text: 'Contact Me', ref: '#contact-me' },
];

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      width="100%"
      height="100%"
      as="section"
      pb="12px"
      pr="20px"
    >
      <Flex
        pl="22px"
        pt="20px"
      >
        <>
          <Link
            href="#experience"
            mr="84px"
            fontSize="20px"
            textDecoration="none !important"
          >
            Byron Wang
          </Link>
          {isDesktop ? (
            navItems.map((item, index) => {
              return (
                <Link
                  href={item.ref}
                  pl="24px"
                  pr="24px"
                  textDecoration="none !important"
                  key={index}
                >
                  {item.text}
                </Link>
              );
            })
          ) : (
            <Icon
              cursor="pointer"
              alignSelf="center"
              ml="auto"
              as={BiMenuAltRight}
              boxSize={6}
              mr="10px"
            />
          )}
          <Icon
            ml={{ base: 'none', lg: 'auto' }}
            boxSize={6}
            cursor="pointer"
            alignSelf="center"
            as={SunIcon}
          />
        </>
      </Flex>
    </Box>
  );
};

export default Navbar;
