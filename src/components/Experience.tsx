import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import { useRef } from 'react';
import { useEffect } from 'react';
import Tag from './Tag';

const experiences = [
  // {
  //   title: '',
  //   location: '',
  //   link: '',
  //   description: [],
  //   tags: [],
  //   logo: [],
  //   photos: [],
  //   captions: [],
  // },
  {
    title: 'Fullstack Developer @ TheCreativeSolution',
    location: 'Vancouver, BC, May 2024 - Present',
    link: 'https://www.thecreativesolution.ca/',
    description: ['more info soon 👀'],
    tags: [],
    logo: './experiences/TCS_logo.jpeg',
    photos: [],
    captions: [],
  },
  {
    title: 'Software Developer Intern @ PayByPhone',
    location: 'Vancouver, BC, May 2023 - Dec 2023',
    link: 'https://www.paybyphone.com/',
    description: [
      'Contributed to the implementation of core features for m2.paybyphone.com by enhancing the website`s user interface and working with serverside endpoints to elevate functionality',
      'Spearheaded the migration of our CI/CD system from TeamCity to GitLab CI/CD, resulting in improved efficiency',
      'Implemented a flexible Docker image by introducing support for multiple Node.js versions to accommodate diverse project requirements',
    ],
    tags: ['JavaScript', 'React', 'Docker', 'Dev-ops'],
    logo: './experiences/paybyphone-logo.png',
    photos: ['./experiences/paybyphone-picture.png'],
    captions: [
      'My catchphrase during these 8 months has been "No I do not get free parking"',
    ],
  },
  {
    title: 'Software Developer Intern @ Apryse',
    location: 'Vancouver, BC, May 2022 - Dec 2022',
    link: 'https://www.pdftron.com/',
    description: [
      'Developed reusable and accessible UI components for xodo.com using TypeScript React and maintained code with production of end to end tests',
      'Created API endpoints to allow for storage of PDFs in node.js for increased usability of users',
    ],
    tags: ['TypeScript', 'React', 'Next.js', 'Web Development'],
    logo: './experiences/apryse-logo.png',
    photos: ['./experiences/pdftron-picture.png'],
    captions: ['Last day at the office!'],
  },
  {
    title: 'Undergraduate Teaching Assistant @ UBC',
    location: 'Vancouver, BC, Sept 2020 - Dec 2021',
    link: 'https://www.cs.ubc.ca/',
    description: [
      'Provided assistance to 600+ non-computer science students to help them understand computational concepts',
      'Led weekly lab sessions for over 90 students, completing over 36 labs over the course of the term and prepared recorded video solutions to lab problems for success of future TAs and students',
      'Hosted 10 office hours and a group review session before exams assisting 35+ students',
    ],
    tags: ['Algorithms', 'Teaching', 'Leadership'],
    logo: './experiences/ubc-logo.png',
  },
];

const Experience = ({ id }) => {
  const targetRef = useRef(null);
  const secondaryTextColour = useColorModeValue(
    'light.secondaryTextColour',
    'dark.secondaryTextColour'
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={targetRef}
      id={id}
      className="fade-in"
      flexDirection="column"
      alignItems="center"
      width={{ base: '340px', sm: '470px', md: '700px', lg: '800px' }}
    >
      <HeaderText text="Experience" />
      <Accordion
        // defaultIndex={[0]}
        allowMultiple
        w="auto"
        mx="auto"
      >
        {experiences.map((experience, id) => {
          const { title, location, link, description, tags, logo } = experience;
          const photos = experience?.photos;
          const captions = experience?.captions;
          return (
            <AccordionItem key={id}>
              <Text>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    alignItems="center"
                    display="flex"
                    flexDir="row"
                    fontWeight="bold"
                    fontSize={{ base: '22px', md: '24px', lg: '24px' }}
                    px="10px"
                  >
                    <Image
                      borderRadius="5px"
                      mr="30px"
                      w="80px"
                      src={logo}
                      alt="company-logo"
                    />
                    <Text>{title}</Text>
                  </Box>
                  <AccordionIcon mr="20px" />
                </AccordionButton>
              </Text>

              <AccordionPanel
                pb={4}
                pl="35px"
              >
                <VStack alignItems="flex-start">
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: '20px', md: '22px', lg: '22px' }}
                    color={secondaryTextColour}
                  >
                    📍 {location}
                  </Text>
                  <VStack
                    spacing="10px"
                    pl="10px"
                    alignItems="baseline"
                  >
                    {description.map((desc, id) => {
                      return (
                        <Text
                          fontSize={{ base: '16px', md: '16px', lg: '18px' }}
                          key={id}
                        >
                          • {desc}
                        </Text>
                      );
                    })}
                  </VStack>
                  <Flex
                    flexDirection="row"
                    flexWrap="wrap"
                    py="10px"
                  >
                    {tags.map((tag, id) => {
                      return (
                        <Tag
                          key={id}
                          content={tag}
                        />
                      );
                    })}
                  </Flex>
                  {photos && (
                    <Flex
                      flexDirection="row"
                      flexWrap="wrap"
                      py="10px"
                    >
                      {photos.map((photo, id) => {
                        return (
                          <VStack key={id}>
                            <Image
                              w="250px"
                              src={photo}
                              alt="work-photo"
                              borderRadius="8px"
                            />
                            <Text
                              color={secondaryTextColour}
                              w="250px"
                            >
                              {captions[id]}
                            </Text>
                          </VStack>
                        );
                      })}
                    </Flex>
                  )}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Experience;
