import { Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import ProjectCard from './ProjectCard';

const projects = [
  // {
  //   title: "",
  //   githubLink: "",
  //   date: "",
  //   description: [],
  //   tags: []
  // },
  {
    title: 'Linkt',
    githubLink:
      'https://chrome.google.com/webstore/detail/linkt/fjhmcdeacfacahfiiimnkmccnocidjpn/related',
    date: 'July 2023',
    description: [
      'Developed a chrome extension to remove the hassle of repeatedly searching up the same links',
      'Utilized local storage to persist data upon refresh',
    ],
    tags: ['React', 'Local Storage', 'Productivity'],
  },
  {
    title: 'RiseOrRegret',
    githubLink: 'https://github.com/byronwang93/RiseOrRegret',
    date: 'July 2023',
    description: [
      'A practical alarm clock that incentivizes you to actually wake up',
      'If you fail to turn off your alarm in time, the app sends a risky text to someone in your contacts >:)',
      'Created for StormHacks 2023',
    ],
    tags: ['React Native', 'Twilio', 'Express.js'],
  },
  {
    title: 'Portfolio Website',
    githubLink: 'https://github.com/byronwang93/byronwang.com',
    date: 'Sept 2022',
    description: [
      "The site you're currently looking at! Rendition 2 of my portfolio website, this is to showcase the progression of my frontend skills",
    ],
    tags: ['TypeScript', 'React', 'Gatsby', 'CSS', 'GraphQL'],
  },
  {
    title: 'Recreation Centre Database Maintainer',
    githubLink: 'https://github.com/yeojunh/304-Chimps',
    date: 'April 2022',
    description: [
      'Utilized SQL and PHP to model a recreation centre that facilitates additions, deletes and updates of the application using entities and relationships',
    ],
    tags: ['PHP', 'SQL', 'Relational Databases'],
  },
  {
    title: 'Personal Workout Generator',
    githubLink: 'https://github.com/byronwang93/Workout-Generator-Java',
    date: 'Aug 2021',
    description: [
      'Developed a workout generator, allowing users to input unique exercises and generates a random workout based off of user inputs and preferences',
      'User inputs saved and loaded by converting data to JSON files',
    ],
    tags: ['Java', 'JSON'],
  },
];

const Projects = ({ id }) => {
  return (
    <Flex
      id={id}
      pt="20px"
      m="70px 4px 70px 4px"
      height="auto"
      justifyContent="center"
      width={{ base: '370px', md: '700px', lg: '900px' }}
      flexDirection="column"
      alignItems="center"
    >
      <HeaderText text="Projects" />
      {projects.map((project, id) => {
        const title = project.title;
        const link = project.githubLink;
        const date = project.date;
        const description = project.description;
        const tags = project.tags;
        return (
          <ProjectCard
            date={date}
            tags={tags}
            description={description}
            title={title}
            link={link}
            key={id}
          />
        );
      })}
    </Flex>
  );
};

export default Projects;
