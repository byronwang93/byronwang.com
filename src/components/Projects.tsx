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
      m="50px 4px 50px 4px"
      height="auto"
      justifyContent="center"
      width={{ base: '370px', md: '700px', lg: '900px' }}
      flexDirection="column"
      alignItems="center"
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
