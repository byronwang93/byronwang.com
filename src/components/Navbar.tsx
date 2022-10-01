import React from 'react';
import {
  useColorMode,
  Box,
  Flex,
  useBreakpointValue,
  Icon,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stack,
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MoonIcon, SunIcon } from '../assets/icons';

const navItems = [
  { text: 'About', ref: '#intro' },
  { text: 'Experience', ref: '#experience' },
  { text: 'Projects', ref: '#projects' },
  { text: 'Fun', ref: '#fun' },
  { text: 'Contact Me', ref: '#contact-me' },
];

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      width="100%"
      height="auto"
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
            position="relative"
            bottom="4px"
            href="#about"
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
                  fontSize="17px"
                >
                  {item.text}
                </Link>
              );
            })
          ) : (
            <>
              <Icon
                cursor="pointer"
                alignSelf="center"
                ml="auto"
                as={BiMenuAltRight}
                boxSize={6}
                mr="10px"
                onClick={onOpen}
              />
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody>
                    <Stack
                      pt="35px"
                      alignItems="center"
                      spacing="30px"
                    >
                      {navItems.map((item, index) => {
                        return (
                          <Link
                            textAlign="center"
                            width="100%"
                            href={item.ref}
                            textDecoration="none !important"
                            key={index}
                            fontSize="20px"
                            onClick={onClose}
                            p="4px"
                          >
                            {item.text}
                          </Link>
                        );
                      })}
                    </Stack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
          <Icon
            ml={{ base: 'none', lg: 'auto' }}
            boxSize={6}
            cursor="pointer"
            alignSelf="center"
            as={colorMode === 'light' ? SunIcon : MoonIcon}
            onClick={toggleColorMode}
          />
        </>
      </Flex>
    </Box>
  );
};

export default Navbar;
