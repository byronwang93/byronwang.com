import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Email, Github, Linkedin, Youtube } from '../assets/icons';

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

  const videos = ['UYQfnTmqPCI', 'tHjIUg4OYU4'];
  const { colorMode } = useColorMode();

  const [videoIndex, setVideoIndex] = useState(0);
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
      custom,
    } = funEntries[factIndex];
    console.log(icon, ' is the icon');

    setFactDetails({
      icon: icon,
      date: date,
      tldr: tldr,
      notable: notable,
      description: description,
      image: image,
      videoLink: videoLink,
      caption: caption,
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
    //   image: null,
    //   videoLink: null,
    //   caption: null,
    //   custom: false
    // },
    {
      icon: Github,
      date: 'present',
      tldr: 'random content creation ??',
      notable: null,
      description:
        'As of December 2022 I started a YouTube channel! Still in the works but the plan is to use this to document my side quest journeys, whether it be animating progress, cool projects or life updates.',
      image: null,
      videoLink: 'UYQfnTmqPCI',
      caption: 'first video!',
      custom: true,
    },
    {
      icon: Github,
      date: '2024',
      tldr: '2-handed competitive bowler',
      notable: '229 PB',
      description:
        'Back in September 2023 I decided to make the jump from being a casual bowler and joined a bowling league! Once I bought my own ball and shoes, I knew there was no going back ...',
      image: './side-quests/bowling-dubhacks.JPG',
      videoLink: null,
      caption: 'Me finding out some US colleges have their own bowling alleys',
      custom: false,
    },
    {
      icon: Github,
      date: '2023',
      tldr: 'competitive runner',
      notable: '40:37 10km PB',
      description:
        'After running track and cross country in high school, I thought I would be done the sport forever, but last year my friend bet that he could beat me in a 10km race so of course I took him up on that >:)!',
      image: null,
      videoLink: null,
      caption:
        'It was moments like this which remind me why I quit running in the first place LOL',
      custom: false,
    },
    {
      icon: Github,
      date: '2019',
      tldr: 'competitive swimmer',
      notable: '58.65 100m Backstroke (SCM)',
      description:
        'I swam competitively for 6 years to the point where I swam at Western Nationals. To this day I have no clue how I was able to wake up for 5:30am practices 🥲.',
      image: null,
      videoLink: null,
      caption: null,
      custom: false,
    },
    {
      icon: Github,
      date: '2023',
      tldr: 'HackCamp director @ nwPlus - hackathon organizer',
      notable: null,
      description:
        "I'm part of nwPlus, the club behind the largest hackathons in western Canada. This past year I was the lead for HackCamp, where we managed to hold its largest iteration EVER, bringing in 250+ first time hackers",
      image: null,
      videoLink: null,
      caption: null,
      custom: false,
    },
    {
      icon: Github,
      date: '2017',
      tldr: 'former Mario Kart tryhard',
      notable: '8th worldwide on Donut Plains 3',
      description:
        'A lot of people have a gamer phase and mine was Mario Kart 8 😮‍💨. Having multiple top 10 in Canada times, my proudest feat was achieving 8th in the world in Donut Plains 3. High school me needed to touch some grass...',
      image: null,
      videoLink: '43py_UtGUdw',
      caption: 'Video of my DP3 run :)',
      custom: false,
    },
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
      // backgroundColor="blue.100"
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
      <HStack
        // bgColor="green.500"
        pt="10px"
        spacing={isDesktop && '40px'}
      >
        <VStack
          backgroundColor="#D3C6B4"
          h={`${shelfHeight}px`}
          w="320px"
          borderRadius="2px"
          outline="10px solid #6C5D46"
          mb="15px"
        >
          {rows.map((row, index) => {
            return (
              <HStack
                position="absolute"
                key={index}
                alignSelf="baseline"
                pt={`${index * 110}px`}
                // zIndex="10"
                w="inherit"
                spacing={row.length == 4 ? 'auto' : '13.328px'}
                px="20px"
              >
                {row.map((item, index) => {
                  return (
                    <Icon
                      zIndex="10"
                      mt="40px"
                      cursor="pointer"
                      key={index}
                      alignSelf="baseline"
                      fill={colorMode === 'dark' ? 'white' : 'black'}
                      stroke={colorMode === 'dark' ? 'white' : 'black'}
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
                pt={shelfHeight / 4.5}
                w="100%"
                borderBottom="8px solid #6C5D46"
              ></Box>
            );
          })}
        </VStack>
        {isDesktop && (
          <VStack
            overflowY="auto"
            // overflowY="scroll"
            alignSelf="baseline"
            // backgroundColor="#D3C611"
            maxH={`${shelfHeight}px`}
            w={{ base: '350px', lg: '430px' }}
            spacing="3px"
            // borderRadius="2px"
            // outline="10px solid #6C5D46"
            mb="20px"
            alignItems="baseline"
          >
            <Icon
              alignSelf="baseline"
              fill={colorMode === 'dark' ? 'white' : 'black'}
              stroke={colorMode === 'dark' ? 'white' : 'black'}
              boxSize={'35px'}
              as={factDetails.icon}
            />
            <Text
              pt="5px"
              className="date"
            >
              <Box
                as="span"
                fontWeight="bold"
              >
                Date:
              </Box>{' '}
              {factDetails.date}
            </Text>
            <Text className="tldr">
              <Box
                as="span"
                fontWeight="bold"
              >
                tldr:
              </Box>{' '}
              {factDetails.tldr}
            </Text>
            {factDetails?.notable && (
              <Text className="notable">
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
            {factDetails?.image && (
              <VStack
                // alignSelf={{ base: 'baseline', lg: 'center' }}
                spacing="4px"
                alignItems="baseline"
                // justifyContent="center"
              >
                <Image
                  borderRadius="5px"
                  my="7px"
                  mr="30px"
                  w={{ base: '260px', lg: '300px' }}
                  src={factDetails.image}
                  alt="project-image"
                />
                {factDetails?.caption && (
                  <Text
                    pl="7px"
                    w={{ base: '260px', lg: '300px' }}
                    color={secondaryTextColour}
                  >
                    {factDetails.caption}
                  </Text>
                )}
              </VStack>
            )}
            {factDetails?.videoLink && (
              <VStack
                // alignSelf={{ base: 'baseline', lg: 'center' }}
                spacing="4px"
                alignItems="baseline"
                // justifyContent="center"
              >
                <YouTube
                  videoId={factDetails.videoLink}
                  opts={{
                    height: '240',
                    width: '100%',
                  }}
                />
                {factDetails?.caption && (
                  <Text
                    pl="7px"
                    color={secondaryTextColour}
                  >
                    {factDetails.caption}
                  </Text>
                )}
              </VStack>
            )}
          </VStack>
        )}
      </HStack>
      {/* <Box
        width="100%"
        //@ts-ignore
        textAlign="-webkit-center"
        pb="35px"
      >
        <HStack
          spacing="20px"
          justifyContent="center"
        >
          <YouTube
            videoId={videos[videoIndex]}
            opts={{
              height: '340',
              width: `${vidWidth}px`,
            }}
          />
        </HStack>
      </Box> */}
      {/* <HStack
        pb="26px"
        spacing="60px"
        justifyContent="center"
      >
        <Icon
          boxSize="30px"
          as={ArrowBackIcon}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (videoIndex === 0) {
              setVideoIndex(videos.length - 1);
            } else {
              setVideoIndex(videoIndex - 1);
            }
          }}
        />
        <Icon
          boxSize="30px"
          as={ArrowForwardIcon}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (videoIndex === videos.length - 1) {
              setVideoIndex(0);
            } else {
              setVideoIndex(videoIndex + 1);
            }
          }}
        />
      </HStack>
      <Box
        width={{ base: '300px', md: '400px', lg: '600px' }}
        fontSize="18px"
      >
        <Text pb="12px">
          Ever since I was a child, I’ve always had a passion for drawing,
          spending countless hours drawing comics with my brother and creating
          our own (admittingly simple) worlds.
        </Text>
        <Text>
          From the theme of my website, you can probably tell I haven’t grown
          out of the doodling phase, so as of December 2022, I started a youtube
          channel to practice animating! Looking to make more fun videos in the
          future so keep checking back for updates or consider checking out my
          channel{' '}
          <Link
            isExternal
            href="https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA"
            color={standoutText}
          >
            here
          </Link>{' '}
          (or consider subscribing 👉 👈)!
        </Text>
      </Box> */}
    </Flex>
  );
};

export default Fun;
