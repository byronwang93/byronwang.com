import { Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import ExperienceCard from './ExperienceCard';

const experiences = [
  // {
  //   title: '',
  //   location: '',
  //   link: '',
  //   description: [],
  //   tags: [],
  // },
  {
    title: 'Software Developer Co-op @ PayByPhone',
    location: 'Vancouver, BC, May 2023 - Present',
    link: 'https://www.paybyphone.com/',
    description: [],
    tags: ['JavaScript', 'React'],
  },
  {
    title: 'Web Developer Co-op @ Apryse',
    location: 'Vancouver, BC, May 2022 - Dec 2022',
    link: 'https://www.pdftron.com/',
    description: [
      'Developed reusable and accessible UI components using TypeScript React and maintained code with production of end to end tests',
      'Worked on integrating serverside features with our backend api to process user data which included improving user authentication',
      'Utilizing agile scrum methodology to complete 2-week long sprints working on xodo.com with 2,000,000+ monthly users',
    ],
    tags: ['TypeScript', 'React', 'Next.js', 'Web Development'],
  },
  {
    title: 'Undergraduate Teaching Assistant @ UBC',
    location: 'Vancouver, BC, Sept 2020 - Dec 2021',
    link: 'https://www.cs.ubc.ca/',
    description: [
      'Provided thought-provoking assistance to 600+ non-computer science students to help them understand computational concepts',
      'Led weekly lab sessions for over 90 students, completing over 36 labs over the course of the term and prepared recorded video solutions to lab problems for success of future TAs and students',
      'Hosted 10 office hours and a group review session before exams assisting 35+ students',
    ],
    tags: ['Algorithms', 'Teaching', 'Leadership'],
  },
];

const Experience = ({ id }) => {
  return (
    <Flex
      id={id}
      pt="20px"
      mt="70px"
      mb="70px"
      m="0 4px 0 4px"
      height="auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={{ base: '370px', md: '700px', lg: '900px' }}
    >
      <HeaderText text="Experience" />
      {experiences.map((experience, id) => {
        const title = experience.title;
        const link = experience.link;
        const location = experience.location;
        const description = experience.description;
        const tags = experience.tags;
        return (
          <ExperienceCard
            link={link}
            description={description}
            tags={tags}
            title={title}
            key={id}
            location={location}
          />
        );
      })}
    </Flex>
  );
};

export default Experience;
