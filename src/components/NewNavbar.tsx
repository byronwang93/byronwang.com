import React from 'react';
import {
  useColorMode,
  Box,
  useBreakpointValue,
  Icon,
  Link,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '../assets/icons';

const navItems = [
  { text: 'about', ref: '#intro' },
  { text: 'experience', ref: '#experience' },
  { text: 'projects', ref: '#projects' },
  { text: 'fun', ref: '#fun' },
];

const NewNavbar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
        // bgColor="pink.100"
        bg={`rgba(0, 0, 0, ${colorMode === 'dark' ? 0.3 : 0.1})`}
        justifyContent="center"
        //   bgColor="green.100"
      >
        {navItems.map((item, index) => {
          return (
            <Link
              //   bgColor="purple.100"
              href={item.ref}
              pt="2px"
              px={{ base: '12px', md: '24px' }}
              textDecoration="none !important"
              key={index}
              fontSize={{ base: '13px', md: '17px' }}
            >
              {item.text}
            </Link>
          );
        })}
        <Icon
          mr="10px"
          verticalAlign="middle"
          // bgColor="blue.100"
          boxSize={{ base: 5, md: 6 }}
          cursor="pointer"
          //   alignSelf="center"
          as={colorMode === 'light' ? SunIcon : MoonIcon}
          onClick={toggleColorMode}
        />
      </HStack>
    </Box>
  );
};

export default NewNavbar;
