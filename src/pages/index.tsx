import { Flex } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Fun from '../components/Fun';
import ContactMe from '../components/ContactMe';
import Intro from '../components/Intro';
import MovingArrow from '../components/MovingArrow';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Flex
        height="100%"
        direction="column"
        alignItems="center"
      >
        <About id="about" />
        <MovingArrow />
        <Intro id="intro" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Fun id="fun" />
        <ContactMe id="contact-me" />
      </Flex>
    </Layout>
  );
}
