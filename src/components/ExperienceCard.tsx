import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Tag from './Tag';

interface ExperienceProps {
  title: string;
  link: string;
  location: string;
  description: string[];
  tags: string[];
}

const ExperienceCard = ({
  title,
  link,
  location,
  description,
  tags,
}: ExperienceProps) => {
  const firstHalf = title.substring(0, title.lastIndexOf(' ')) + ' ';
  const secondHalf = title.split(' ').pop();
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );

  return (
    <Flex
      flexDirection="column"
      width="91%"
      pt="40px"
      pb="40px"
    >
      <Text
        pb="10px"
        fontWeight="bold"
        fontSize="24px"
      >
        {firstHalf}
        <Link
          isExternal
          href={link}
          color={standoutText}
        >
          {secondHalf}
        </Link>
      </Text>
      <Text
        fontSize="20px"
        pb="10px"
      >
        📍{location}
      </Text>
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        pb="10px"
      >
        {description.map((entry, id) => {
          return (
            <Text
              pb="10px"
              fontSize="18px"
              position="relative"
              left="20px"
              key={id}
            >
              • {entry}
            </Text>
          );
        })}
      </Flex>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
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
    </Flex>
  );
};

export default ExperienceCard;
