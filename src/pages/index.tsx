import React from 'react';
import Layout from '../components/common/Layout';
import { Flex } from '@chakra-ui/react';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Fun from '../components/sections/Fun';
import Intro from '../components/sections/Intro';
import MovingArrow from '../components/common/MovingArrow';
import About from '../components/sections/About';
import NavBar from '../components/common/Navbar';

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
