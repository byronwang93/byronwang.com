import { Flex } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Fun from '../components/Fun';
import ContactMe from '../components/ContactMe';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <Layout>
      <Flex
        height="100%"
        direction="column"
        alignItems="center"
      >
        <About />
        <Intro />
        <Experience />
        <Projects />
        <Fun />
        <ContactMe />
      </Flex>
    </Layout>
  );
}
