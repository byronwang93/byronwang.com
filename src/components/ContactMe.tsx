import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import LeftWordsHeader from './HeaderText';

const ContactMe = ({ id }) => {
  const buttonColour = useColorModeValue(
    'light.initialButtonColour',
    'dark.initialButtonColour'
  );
  const hoverColour = useColorModeValue(
    'light.hoverColour',
    'dark.hoverColour'
  );
  const textColour = useColorModeValue(
    'light.tagTextColour',
    'dark.tagTextColour'
  );

  return (
    <Flex
      id={id}
      pt="20px"
      m="50px 4px 50px 4px"
      height="auto"
      flexDirection="column"
      width={{ base: '370px', md: '700px', lg: '1200px' }}
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
              w={{ base: '300px', md: '500px', lg: '650px' }}
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
            _hover={{ bg: hoverColour }}
            bg={buttonColour}
            color={textColour}
          >
            submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactMe;
