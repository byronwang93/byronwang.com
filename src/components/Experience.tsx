import { Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import { graphql, useStaticQuery } from 'gatsby';
import ExperienceCard from './ExperienceCard';

const query = graphql`
  query {
    allContentfulExperience {
      nodes {
        childContentfulExperienceContentJsonNode {
          description
          tags
        }
        childContentfulExperienceLinkTextNode {
          link
        }
        id
        title
        childContentfulExperienceLocationTextNode {
          location
        }
      }
    }
  }
`;

const Experience = ({ id }) => {
  const data = useStaticQuery(query);
  const experiences = data.allContentfulExperience.nodes;
  console.log(experiences, ' is experiences');

  return (
    <Flex
      id={id}
      backgroundColor="beige"
      pt="20px"
      mt="50px"
      mb="50px"
      height="auto"
      flexDirection="column"
      justifyContent="center"
      width={{ base: '390px', md: '700px', lg: '900px' }}
    >
      <HeaderText text="Experience" />
      <ExperienceCard />
    </Flex>
  );
};

export default Experience;
