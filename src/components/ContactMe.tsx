import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import LeftWordsHeader from './HeaderText';

const ContactMe = ({ id }) => {
  return (
    <Flex
      id={id}
      pt="20px"
      mt="50px"
      mb="50px"
      height="auto"
      flexDirection="column"
      justifyContent="center"
      width={{ base: '390px', md: '700px', lg: '1200px' }}
    >
      <LeftWordsHeader text="Contact Me" />
      <Box
        textAlign="center"
        alignSelf="center"
      >
        <form
          className="form contact-form"
          action="https://formspree.io/f/xknejgzr"
          method="POST"
        >
          <Flex
            pb="10px"
            flexDirection="column"
          >
            <FormLabel
              align-self="baseline"
              htmlFor="name"
            >
              name
            </FormLabel>
            <Input
              w={{ base: '400px', md: '500px', lg: '650px' }}
              backgroundColor="white"
              type="text"
              name="name"
              id="name"
            />
          </Flex>
          <Flex
            pb="10px"
            flexDirection="column"
          >
            <FormLabel htmlFor="email">email</FormLabel>
            <Input
              backgroundColor="white"
              type="text"
              name="email"
              id="email"
            />
          </Flex>
          <Flex flexDirection="column">
            <FormLabel htmlFor="message">message</FormLabel>
            <Input
              flexWrap="wrap"
              backgroundColor="white"
              name="message"
              id="message"
            />
          </Flex>
          <Button
            type="submit"
            mt="40px"
            w="100%"
            _hover={{ bg: '#FF5970' }}
            bg="#FFA0AD"
          >
            submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactMe;
