import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/main.css';
import { ChakraProvider, VStack } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <VStack
        display="flex"
        w="100%"
      >
        <Navbar />
        {children}
        <Footer />
      </VStack>
    </ChakraProvider>
  );
};

export default Layout;
