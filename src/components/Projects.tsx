import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Github, PersonalWebsite, Youtube } from '../assets/icons';
import HeaderText from './HeaderText';
import ProjectCard from './ProjectCard';
import Tag from './Tag';

const sideProjects = [
  // {
  //   title: "",
  //   subtitle: "",
  //   titlePicture: "",
  //   githubLink: "",
  //   deployLink: "",
  //   youtubeLink: "",
  //   winner: false,
  //   location: "",
  //   description: [],
  //   tags: [],
  //   photos: [],
  //   captions: [],
  // },
  {
    title: 'Schedule Me',
    subtitle: 'Hackathon scheduling automater',
    titlePicture: '📆',
    githubLink: 'https://github.com/byronwang93/schedule-me',
    deployLink: '',
    youtubeLink: '',
    winner: false,
    location: 'Dec 2023',
    description: [
      'Automated the creation of organizer shifts for hackathons hosted by nwPlus (the largest hackathons in Western Canada)',
    ],
    tags: ['OpenAI', 'Express', 'React'],
    photos: [],
    captions: [],
  },
  {
    title: 'Pin Tracker',
    subtitle: 'Bowling stats tracker',
    titlePicture: '🎳',
    githubLink: 'https://github.com/byronwang93/pin-tracker',
    deployLink: 'https://byronwang93.github.io/pin-tracker/',
    youtubeLink: '',
    winner: false,
    location: 'Sept 2023',
    description: [
      'Tracks bowling stats unique to individuals including averages, personal bests, throwing form, and charts to visualize progression',
      'Implemented a leaderboard system for some friendly competition between friends',
    ],
    tags: ['Firebase', 'React', 'Figma'],
    photos: [],
    captions: [],
  },
  {
    title: 'RiseOrRegret',
    subtitle: 'An alarm clock that actually wakes you up',
    titlePicture: '👹',
    githubLink: 'https://github.com/byronwang93/RiseOrRegret',
    deployLink: 'https://devpost.com/software/rise-or-regret',
    youtubeLink: '',
    winner: false,
    location: 'July 2023',
    description: [
      'A practical alarm clock that incentivizes you to actually wake up',
      'If you fail to turn off your alarm in time, the app sends a risky text to someone in your contacts >:)',
      'Created for StormHacks 2023',
    ],
    tags: ['React Native', 'Twilio', 'Express.js'],
    photos: [],
    captions: [],
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Where my thoughts run wild',
    titlePicture: '😌',
    githubLink: 'https://github.com/byronwang93/byronwang.com',
    deployLink: 'https://www.byronwang.com/',
    youtubeLink: '',
    winner: false,
    location: 'Jan 2024',
    description: [
      "The site you're currently looking at! Rendition 3 of my portfolio website, this is to showcase the progression of my frontend skills",
    ],
    tags: ['TypeScript', 'React', 'Gatsby', 'CSS'],
    photos: [],
    captions: [],
  },
  {
    title: 'Recreation Centre Database Maintainer',
    subtitle: 'CPSC 304 project',
    titlePicture: '⛸',
    githubLink: 'https://github.com/yeojunh/304-Chimps',
    deployLink: '',
    youtubeLink: '',
    winner: false,
    location: 'April 2022',
    description: [
      'Utilized SQL and PHP to model a recreation centre that facilitates additions, deletes and updates of the application using entities and relationships',
    ],
    tags: ['PHP', 'SQL', 'Relational Databases'],
    photos: [],
    captions: [],
  },
  {
    title: 'Personal Workout Generator',
    subtitle: 'Making workout routines easier',
    titlePicture: '💪',
    githubLink: 'https://github.com/byronwang93/Workout-Generator-Java',
    deployLink: '',
    youtubeLink: '',
    winner: false,
    location: 'Aug 2021',
    description: [
      'Developed a workout generator, allowing users to input unique exercises and generates a random workout based off of user inputs and preferences',
      'User inputs saved and loaded by converting data to JSON files',
    ],
    tags: ['Java', 'JSON'],
    photos: [],
    captions: [],
  },
];

const mainProjects = [
  // {
  //   title: "",
  //   subtitle: "",
  //   titlePicture: "",
  //   githubLink: "",
  //   deployLink: "",
  //   youtubeLink: "",
  //   winner: false,
  //   location: "",
  //   description: [],
  //   tags: [],
  //   photos: [],
  //   captions: [],
  // },
  {
    title: 'Dialog',
    subtitle: 'Language learning speaking aid',
    titlePicture: './projects/dialog-picture.jpg',
    githubLink: 'https://github.com/naijwu/dubhacks2023',
    deployLink: 'https://www.dialog.courses/',
    youtubeLink: '',
    winner: true,
    location: 'Oct 2023, DubHacks 2023',
    description: [
      'Created a language learning tool that mocks any real world scenario, capable of hearing and responding with over 6 languages',
      "Utilized OpenAI's whisper API to convert text-to-speech, which is processed by GPT-3.5-turbo. The response is then fed to Google API's text-to-speech sythesis, which is read out to the user",
      'Awarded best use of Google Cloud award',
    ],
    tags: ['OpenAI', 'Google-Cloud', 'Next.js', 'TypeScript', 'Spline'],
    photos: [
      './projects/google-cloud-winners.png',
      './projects/hour-1-dubhacks.png',
    ],
    captions: [
      'Google cloud award!',
      "The start of a long and sleepless day :')",
    ],
  },
  // {
  //   title: 'Schedule Me',
  //   subtitle: '',
  //   titlePicture: '',
  //   githubLink: '',
  //   deployLink: '',
  //   youtubeLink: '',
  //   winner: false,
  //   location: '',
  //   description: [],
  //   tags: [],
  //   photos: [],
  //   captions: [],
  // },
  {
    title: 'Chew Chew',
    subtitle: 'Making food more accessible for students',
    titlePicture: './projects/chew-chew-picture.png',
    githubLink: 'https://github.com/orgs/HelthGoUp/repositories',
    deployLink: 'https://devpost.com/software/chew-chew',
    youtubeLink:
      'https://www.youtube.com/watch?v=lZVBrbcwgFo&ab_channel=ByronWang',
    winner: true,
    location: 'June 2023, WaffleHacks 2023',
    description: [
      "Utilized GPT-3.5 to generate recipes given a user's available ingredients to target student food insecurity",
      'Created a forum page for students to share and be notified of extra food being handed out using firebase firestore',
      'Awarded runner up for food sustainability prize',
    ],
    tags: ['GPT-3.5', 'React', 'Firebase', 'Express.js'],
    photos: [],
    captions: [],
  },
  {
    title: 'Linkt',
    subtitle: 'Link manager chrome extension',
    titlePicture: './projects/linkt-picture.png',
    githubLink: 'https://github.com/byronwang93/Linkt',
    deployLink:
      'https://chrome.google.com/webstore/detail/linkt/fjhmcdeacfacahfiiimnkmccnocidjpn/related',
    youtubeLink: '',
    winner: false,
    location: 'July 2023',
    description: [
      'Developed a chrome extension to remove the hassle of repeatedly searching up the same links',
      'Utilized local storage to persist data upon refresh',
    ],
    tags: ['React', 'Local Storage', 'Productivity'],
    photos: [],
    captions: [],
  },
];

const Projects = ({ id }) => {
  const targetRef = useRef(null);
  const secondaryTextColour = useColorModeValue(
    'light.secondaryTextColour',
    'dark.secondaryTextColour'
  );

  const { colorMode } = useColorMode();

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
      { threshold: 0.1 }
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
      <HeaderText text="Projects" />
      <Accordion
        allowMultiple
        w="auto"
        mx="auto"
      >
        {mainProjects.map((project, id) => {
          const {
            title,
            subtitle,
            titlePicture,
            winner,
            location,
            description,
            tags,
          } = project;
          const githubLink = project?.githubLink;
          const deployLink = project?.deployLink;
          const youtubeLink = project?.youtubeLink;
          const photos = project?.photos;
          const captions = project?.captions;
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
                      borderRadius="10px"
                      my="7px"
                      mr="30px"
                      w={{ base: '100px', sm: '120px' }}
                      src={titlePicture}
                      alt="project-image"
                    />
                    <VStack
                      alignItems="start"
                      textAlign="left"
                    >
                      <Text>
                        {title}
                        {winner && '🏅'}
                      </Text>
                      <Text
                        color={secondaryTextColour}
                        fontSize={{ base: '18px', md: '20px', lg: '20px' }}
                      >
                        {subtitle}
                      </Text>
                    </VStack>
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
                  <HStack>
                    {githubLink && (
                      <Icon
                        fill={colorMode === 'dark' ? 'white' : 'black'}
                        stroke={colorMode === 'dark' ? 'white' : 'black'}
                        boxSize={10}
                        as={Github}
                        cursor="pointer"
                        onClick={() => {
                          window.open(githubLink);
                        }}
                      />
                    )}
                    {deployLink && (
                      <Icon
                        fill={colorMode === 'dark' ? 'white' : 'black'}
                        stroke={colorMode === 'dark' ? 'white' : 'black'}
                        boxSize={10}
                        as={PersonalWebsite}
                        cursor="pointer"
                        onClick={() => {
                          window.open(deployLink);
                        }}
                      />
                    )}
                    {youtubeLink && (
                      <Icon
                        fill={colorMode === 'dark' ? 'white' : 'black'}
                        stroke={colorMode === 'dark' ? 'white' : 'black'}
                        boxSize={10}
                        as={Youtube}
                        cursor="pointer"
                        onClick={() => {
                          window.open(youtubeLink);
                        }}
                      />
                    )}
                  </HStack>
                  {photos && (
                    <Flex
                      flexDirection="row"
                      flexWrap="wrap"
                      py="10px"
                    >
                      {photos.map((photo, id) => {
                        return (
                          <VStack
                            key={id}
                            mx="5px"
                          >
                            <Image
                              borderRadius="5px"
                              w="250px"
                              src={photo}
                              alt="project-photo"
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

        {/* more projects here */}
        <VStack mt="20px">
          <HeaderText text="More Projects" />
          {sideProjects.map((project, id) => {
            const {
              title,
              subtitle,
              titlePicture,
              winner,
              location,
              description,
              tags,
            } = project;
            const githubLink = project?.githubLink;
            const deployLink = project?.deployLink;
            const youtubeLink = project?.youtubeLink;
            const photos = project?.photos;
            const captions = project?.captions;
            return (
              <AccordionItem
                w="100%"
                key={id}
              >
                <Text>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      alignItems="center"
                      display="flex"
                      flexDir="row"
                      fontWeight="bold"
                      fontSize={{ base: '18px', md: '20px', lg: '20px' }}
                      px="10px"
                    >
                      <Text
                        mr="20px"
                        fontSize="40px"
                      >
                        {titlePicture}
                      </Text>
                      <VStack
                        alignItems="start"
                        textAlign="left"
                      >
                        <Text>
                          {title}
                          {winner && '🏅'}
                        </Text>
                        <Text
                          color={secondaryTextColour}
                          fontSize={{ base: '15px', md: '17px', lg: '17px' }}
                        >
                          {subtitle}
                        </Text>
                      </VStack>
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
                    <HStack>
                      {githubLink && (
                        <Icon
                          fill={colorMode === 'dark' ? 'white' : 'black'}
                          stroke={colorMode === 'dark' ? 'white' : 'black'}
                          boxSize={10}
                          as={Github}
                          cursor="pointer"
                          onClick={() => {
                            window.open(githubLink);
                          }}
                        />
                      )}
                      {deployLink && (
                        <Icon
                          fill={colorMode === 'dark' ? 'white' : 'black'}
                          stroke={colorMode === 'dark' ? 'white' : 'black'}
                          boxSize={10}
                          as={PersonalWebsite}
                          cursor="pointer"
                          onClick={() => {
                            window.open(deployLink);
                          }}
                        />
                      )}
                      {youtubeLink && (
                        <Icon
                          fill={colorMode === 'dark' ? 'white' : 'black'}
                          stroke={colorMode === 'dark' ? 'white' : 'black'}
                          boxSize={10}
                          as={Youtube}
                          cursor="pointer"
                          onClick={() => {
                            window.open(youtubeLink);
                          }}
                        />
                      )}
                    </HStack>
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
                                borderRadius="5px"
                                w="250px"
                                src={photo}
                                alt="project-photo"
                                mx="5px"
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
        </VStack>
      </Accordion>
    </Box>
  );
};

export default Projects;
