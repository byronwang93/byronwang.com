import { Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from './ProjectCard';

const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        childContentfulProjectsContentJsonNode {
          description
          tags
        }
        childContentfulProjectsGithubLinkTextNode {
          githubLink
        }
        date
        title
      }
    }
  }
`;

const Projects = ({ id }) => {
  const data = useStaticQuery(query);
  const projects = data.allContentfulProjects.nodes.reverse();

  return (
    <Flex
      id={id}
      pt="20px"
      mt="50px"
      mb="50px"
      height="auto"
      justifyContent="center"
      width={{ base: '390px', md: '700px', lg: '900px' }}
      flexDirection="column"
    >
      <HeaderText text="Projects" />
      {projects.map((project, id) => {
        const title = project.title;
        const link =
          project.childContentfulProjectsGithubLinkTextNode.githubLink;
        const date = project.date;
        const description =
          project.childContentfulProjectsContentJsonNode.description;
        const tags = project.childContentfulProjectsContentJsonNode.tags;
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
