import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme';
import 'normalize.css';
import './layout.css';
import LoadingScreen from './LoadingScreen';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const targetRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Check if there is a hash in the URL (e.g., #my-div) and scroll to the target
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 3000); // Adjust the delay (in milliseconds) as desired

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <VStack
          display="flex"
          w="100%"
          minHeight="100vh"
          ref={targetRef}
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
      )}
    </ChakraProvider>
  );
};

export default Layout;
