import React from 'react';
import Layout from '../components/Layout';
import { Flex } from '@chakra-ui/react';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Fun from '../components/Fun';
import ContactMe from '../components/ContactMe';
import Intro from '../components/Intro';
import MovingArrow from '../components/MovingArrow';
import Navbar from '../components/Navbar';
import NewAbout from '../components/NewAbout';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Flex
        direction="column"
        height="100%"
        alignItems="center"
      >
        <NewAbout id="about" />
        {/* <About id="about" /> */}
        <MovingArrow />
        <Intro id="intro" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Fun id="fun" />
      </Flex>
    </Layout>
  );
}

export const Head = () => <title>Byron Wang | Welcome!</title>;
