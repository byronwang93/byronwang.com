import { Box, Flex } from '@chakra-ui/react';
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
        // backgroundColor="green"
        textAlign="center"
      >
        <form
          className="form contact-form"
          action="https://formspree.io/f/xknejgzr"
          method="POST"
        >
          <div className="form-row">
            <label htmlFor="name">your name</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">your email</label>
            <input
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn block"
          >
            submit
          </button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactMe;
