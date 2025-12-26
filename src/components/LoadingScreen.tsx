import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const LoadingScreen = () => {
  return (
    <Box className="loading-screen">
      <Box
        className="loading-gif"
        boxSize={{ base: 340, sm: 420, md: 500 }}
      >
        <Image
          pr={{ md: '40px' }}
          borderRadius="full"
          src={`../../loading-screen.gif`}
          alt="Loading..."
          style={{ animation: 'slow-gif 5s steps(25) infinite' }}
        />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
