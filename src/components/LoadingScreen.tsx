import { Box, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 3000); // Adjust the delay (in milliseconds) as desired

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box className={`loading-screen ${showLoadingScreen ? '' : 'fade-out'}`}>
      <Box
        className="loading-gif"
        boxSize={{ base: 340, sm: 420, md: 500 }}
      >
        <Image
          pr={{ md: '40px' }}
          borderRadius="full"
          src={`../../loading-screen.gif`}
          alt="profile"
          style={{ animation: 'slow-gif 5s steps(25) infinite' }}
        />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
