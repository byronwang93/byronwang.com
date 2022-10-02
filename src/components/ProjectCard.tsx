import { Flex, Link, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import Tag from './Tag';
import { AiOutlineGithub } from 'react-icons/ai';

interface ProjectProps {
  title: string;
  link: string;
  date: string;
  description: string[];
  tags: string[];
}

const ProjectCard = ({
  title,
  link,
  date,
  description,
  tags,
}: ProjectProps) => {
  return (
    <Flex
      flexDirection="column"
      pt="30px"
      pb="30px"
      width="90%"
    >
      <Text
        pb="10px"
        fontWeight="bold"
        fontSize="24px"
      >
        {title}
        <Link
          pl="6px"
          position="relative"
          top="5px"
          isExternal
          href={link}
        >
          <Icon
            boxSize={7}
            as={AiOutlineGithub}
          />
        </Link>
      </Text>
      <Text
        fontSize="20px"
        pb="10px"
      >
        ✨ {date}
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

export default ProjectCard;
