import React from 'react';
import Footer from '../components/Footer';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme';
import 'normalize.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        display="flex"
        w="100%"
        minHeight="100vh"
      >
        {children}
        <Box
          pt="35px"
          position="relative"
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
