import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  MushroomLogo,
  NwplusNew,
  Bowling,
  YoutubeNew,
  Swimming,
  Running,
  Oculus,
  Drawing,
  Chess,
} from '../assets/icons';

const Fun = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );
  const secondaryTextColour = useColorModeValue(
    'light.secondaryTextColour',
    'dark.secondaryTextColour'
  );

  const targetRef = useRef(null);

  const isDesktop = useBreakpointValue({ base: false, md: true });

  const [vidWidth, setVidWidth] = useState(550);

  const [shelfHeight, setShelfHeight] = useState(450);

  useEffect(() => {
    if (isDesktop) setVidWidth(550);
    else setVidWidth(300);
  }, [isDesktop]);

  const [factIndex, setFactIndex] = useState(0);

  // rows
  const [rows, setRows] = useState([]);
  useEffect(() => {
    let res = [[], [], [], []];
    for (let i = 0; i < funEntries.length; i++) {
      let curr = funEntries[i];
      let row = Math.floor(i / 4);
      res[row].push(curr);
    }
    console.log(rows, ' is the rows');
    setRows(res);
  }, []);

  // fact details
  const [factDetails, setFactDetails] = useState({
    icon: null,
    date: null,
    tldr: null,
    notable: null,
    description: null,
    image: null,
    videoLink: null,
    caption: null,
    videoCaption: null,
    custom: null,
  });

  useEffect(() => {
    let {
      icon,
      date,
      tldr,
      notable,
      description,
      image,
      videoLink,
      caption,
      videoCaption,
      custom,
    } = funEntries[factIndex];

    setFactDetails({
      icon: icon,
      date: date,
      tldr: tldr,
      notable: notable,
      description: description,
      image: image,
      videoLink: videoLink,
      caption: caption,
      videoCaption: videoCaption,
      custom: custom,
    });
  }, [factIndex]);

  const funEntries = [
    // template
    // {
    //   icon: null,
    //   date: null,
    //   tldr: null,
    //   notable: null,
    //   description: null,
    //   image: [],
    //   videoLink: [],
    //   caption: [],
    //   videoCaption: [],
    //   custom: false
    // },
    {
      icon: YoutubeNew,
      date: '2022-present',
      tldr: 'random content creation ??',
      notable: null,
      description:
        'As of December 2022 I started a YouTube channel! Still in the works but the plan is to use this to document my side quest journeys, whether it be animating progress, cool projects or life updates.',
      image: null,
      videoLink: ['UYQfnTmqPCI'],
      caption: null,
      videoCaption: ['first video!'],
      custom: true,
    },
    {
      icon: Oculus,
      date: '2024-present',
      tldr: 'VR experimentalist',
      notable: null,
      description:
        'In January of 2024, I bought an Oculus Quest 2 with the sole purpose of creating projects for it. Most recently I used it to create Recall Rehearsal at Stormhacks 2024 (more info in projects). Hopefully more fun updates in the future! o.o',
      image: ['./side-quests/wearing-vr.JPG'],
      videoLink: null,
      caption: ['Does anyone actually look good wearing one of these things??'],
      videoCaption: null,
      custom: true,
    },
    {
      icon: Bowling,
      date: '2023-present',
      tldr: '2-handed competitive bowler',
      notable: '242 PB',
      description:
        'Back in September 2023 I decided to make the jump from being a casual bowler and joined a bowling league! Once I bought my own ball and shoes, I knew there was no going back ...',
      image: ['./side-quests/bowling-dubhacks.JPG'],
      videoLink: null,
      videoCaption: null,
      caption: [
        'Me finding out some US colleges have their own bowling alleys',
      ],
      custom: false,
    },
    {
      icon: NwplusNew,
      date: '2023-2024',
      tldr: 'HackCamp director @ nwPlus - hackathon organizer',
      notable: null,
      description:
        "I'm part of nwPlus, the club behind the largest hackathons in western Canada. This past year I was the lead for HackCamp, where we managed to hold its largest iteration EVER, bringing in 250+ first time hackers",
      image: ['./side-quests/hackcamp1.jpg', './side-quests/hackcamp2.jpg'],
      videoLink: null,
      caption: [
        "can you tell who's who? (I should've mentioned this but I have a twin brother 🧍‍♂️🧍‍♂️)",
        'the dream team behind HackCamp 2023 🤝',
      ],
      custom: false,
    },
    {
      icon: Running,
      date: '2023',
      tldr: 'competitive runner',
      notable: '40:37 10km PB',
      description:
        'After running track and cross country in high school, I thought I would be done the sport forever, but last year my friend bet that he could beat me in a 10km race so of course I took him up on that >:)!',
      image: ['./side-quests/sun-run.jpeg'],
      videoLink: null,
      caption: [
        'It was moments like this which remind me why I quit running in the first place',
      ],
      custom: false,
    },
    {
      icon: Drawing,
      date: '2006-present',
      tldr: 'wannabe cartoonist',
      description:
        "Ever since I was a child, I've had a passion for drawing, where I spent countless hours making comics with my brother and creating our own (admittingly simple) worlds. From the theme of my website, you can probably tell I never grew out of that phase, and it's something I still do to this day!",
      image: ['./side-quests/young-artist.jpg'],
      videoLink: null,
      caption: ["Van Gogh was lucky we weren't drawing in the same era 😎 /s"],
      custom: false,
    },
    {
      icon: Swimming,
      date: '2015-2019',
      tldr: 'competitive swimmer',
      notable: '58.65 100m Backstroke (SCM)',
      description:
        'I swam competitively for 6 years to the point where I swam at Western Nationals. To this day I have no clue how I was able to wake up for 5:30am practices 🥲.',
      image: ['./side-quests/swimming.JPG'],
      videoLink: null,
      caption: [
        'Travelled all the way to Alberta for 50m backstroke but it was worth every penny :)',
      ],
      custom: false,
    },
    {
      icon: MushroomLogo,
      date: '2015-2017',
      tldr: 'former Mario Kart tryhard',
      notable: '8th worldwide on Donut Plains 3',
      description:
        'A lot of people have a gamer phase and mine was Mario Kart 8 😮‍💨. Having multiple top 10 in Canada times, my proudest feat was achieving 8th in the world in Donut Plains 3. High school me needed to touch some grass...',
      image: ['./side-quests/mario-kart-tournament.jpg'],
      videoLink: null,
      caption: [
        "If there's a local Mario Kart tournament, chances are you'll see me and my brother there 😌",
      ],
      videoCaption: null,
      custom: false,
    },
    // {
    //   icon: Chess,
    //   date: '2024-present',
    //   tldr: 'aspiring chess scrub',
    //   notable: 'rapid rating of 650',
    //   description:
    //     "2 years after watching the Queen's Gambit, I randomly found myself binge watching GothamChess on YouTube. Standly proudly with a meme elo, I've played my share of tough opponents (and lost everytime), but hopefully this is my villain origin story ...",
    //   image: ['./side-quests/chess.jpg'],
    //   videoLink: null,
    //   caption: ['The face of a man who just blundered'],
    //   videoCaption: null,
    //   custom: false,
    // },
  ];

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

  const shelfHeights = [1, 2, 3, 4];

  return (
    <Flex
      className="fade-in"
      ref={targetRef}
      flexDirection="column"
      id={id}
      mb="70px"
      height="auto"
      justifyContent="center"
      width={{ base: '330px', md: '700px', lg: '900px' }}
      alignItems="center"
    >
      <HeaderText text="Fun" />
      <Box
        width={{ base: '330px', md: '550px', lg: '610px' }}
        fontSize="18px"
        pb="20px"
      >
        <Text pb="12px">
          There’s more to life than just work and school so I’m a strong
          advocate for side quests in life :). From trying out new sports to
          unorthadox hobbies, here are some of my notable adventures (click
          around!)✨:
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={isDesktop ? 'row' : 'column'}
        pt="10px"
      >
        <VStack
          backgroundColor="#D3C6B4"
          h={`${shelfHeight}px`}
          w="320px"
          borderRadius="2px"
          outline="10px solid #6C5D46"
          mb="15px"
          mr={isDesktop && '25px'}
          alignSelf="center"
        >
          {rows.map((row, index) => {
            return (
              <HStack
                position="absolute"
                key={index}
                alignSelf="baseline"
                pt={`${index * 110}px`}
                w="inherit"
                spacing={row.length == 4 ? 'auto' : '13.328px'}
                px="20px"
              >
                {row.map((item, index) => {
                  return (
                    <Icon
                      zIndex="10"
                      mt="33px"
                      cursor="pointer"
                      key={index}
                      alignSelf="baseline"
                      boxSize={'60px'}
                      _hover={{
                        transform: 'scale(1.17)', // Adjust scale value as needed for desired effect
                      }}
                      onClick={() => {
                        console.log(item, ' is the clicked item');
                        setFactDetails(item);
                      }}
                      transition="transform 0.2s ease-in-out"
                      as={item.icon}
                    />
                  );
                })}
              </HStack>
            );
          })}
          {shelfHeights.map((height, index) => {
            return (
              <Box
                key={index}
                pt={shelfHeight / 4.6}
                w="100%"
                borderBottom="8px solid #6C5D46"
              ></Box>
            );
          })}
        </VStack>
        <VStack
          ml={isDesktop && '25px'}
          mt={!isDesktop && '25px'}
          overflowY="auto"
          alignSelf="baseline"
          maxH={`${shelfHeight}px`}
          w={{ base: '350px', lg: '430px' }}
          spacing="3px"
          mb="20px"
          alignItems="baseline"
        >
          <Icon
            alignSelf="baseline"
            boxSize={'60px'}
            as={factDetails.icon}
          />
          <Text
            pt="5px"
            className="date"
            fontSize="18px"
          >
            <Box
              as="span"
              fontWeight="bold"
            >
              Date:
            </Box>{' '}
            {factDetails.date}
          </Text>
          <Text
            className="tldr"
            fontSize="18px"
          >
            <Box
              as="span"
              fontWeight="bold"
            >
              tldr:
            </Box>{' '}
            {factDetails.tldr}
          </Text>
          {factDetails?.notable && (
            <Text
              className="notable"
              fontSize="18px"
            >
              <Box
                as="span"
                fontWeight="bold"
              >
                Anything notable:
              </Box>{' '}
              {factDetails.notable}
            </Text>
          )}
          <Text py="7px">{factDetails.description}</Text>
          {factDetails?.image &&
            factDetails?.image.map((image, index) => {
              return (
                <VStack
                  key={index}
                  spacing="4px"
                  alignItems="baseline"
                  pb="10px"
                  pt="3px"
                >
                  <Image
                    borderRadius="5px"
                    my="7px"
                    mr="30px"
                    w={{ base: '260px', lg: '300px' }}
                    src={image}
                    alt="project-image"
                  />
                  {factDetails?.caption && (
                    <Text
                      pl="7px"
                      w={{ base: '260px', lg: '300px' }}
                      color={secondaryTextColour}
                    >
                      {factDetails.caption[index]}
                    </Text>
                  )}
                </VStack>
              );
            })}
          {factDetails?.videoLink &&
            factDetails.videoLink.map((video, index) => {
              return (
                <VStack
                  key={index}
                  spacing="4px"
                  alignItems="baseline"
                  pb="7px"
                >
                  <YouTube
                    videoId={video}
                    opts={{
                      height: '240',
                      width: '100%',
                    }}
                  />
                  {factDetails?.videoCaption && (
                    <Text
                      pl="7px"
                      color={secondaryTextColour}
                    >
                      {factDetails.videoCaption[index]}
                    </Text>
                  )}
                </VStack>
              );
            })}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Fun;
