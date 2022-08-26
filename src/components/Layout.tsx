import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/main.css';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <VStack
        display="flex"
        w="100%"
        minHeight="100vh"
      >
        <Navbar />
        {children}
        <Box
          pt="15px"
          position="absolute"
          left="0"
          bottom="20px"
          right="0"
        >
          <Footer />
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default Layout;
