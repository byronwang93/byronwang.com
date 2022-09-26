import { Flex, Text } from '@chakra-ui/react';
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
  return (
    <Flex flexDirection="column">
      <Text>{title}</Text>
      {tags.map((tag, id) => {
        return <Tag />;
      })}
    </Flex>
  );
};

export default ExperienceCard;
