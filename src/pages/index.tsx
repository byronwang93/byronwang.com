import React from 'react';
import Layout from '../components/Layout';
import { Flex } from '@chakra-ui/react';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Fun from '../components/Fun';
import Intro from '../components/Intro';
import MovingArrow from '../components/MovingArrow';
import About from '../components/About';
import NavBar from '../components/Navbar';

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <Flex
        direction="column"
        height="100%"
        alignItems="center"
      >
        <About id="about" />
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
