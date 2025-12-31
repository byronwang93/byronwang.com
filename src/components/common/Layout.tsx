import React, { FC, ReactNode, useState, useEffect } from 'react';
import Footer from './Footer';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';
import theme from '../../@chakra-ui/gatsby-plugin/theme';
import 'normalize.css';
import '../layout.css';
import LoadingScreen from './LoadingScreen';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  // Minimum display time of 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Detect when page content has loaded
  useEffect(() => {
    const handleLoad = () => setContentReady(true);

    if (document.readyState === 'complete') {
      setContentReady(true);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Hide loading when both conditions met
  useEffect(() => {
    if (minTimePassed && contentReady) {
      setShowLoading(false);
      // Handle hash navigation
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [minTimePassed, contentReady]);

  return (
    <ChakraProvider theme={theme}>
      {showLoading && <LoadingScreen />}
      <VStack
        display="flex"
        w="100%"
        minHeight="100vh"
        opacity={showLoading ? 0 : 1}
        transition="opacity 0.5s ease-in-out"
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
