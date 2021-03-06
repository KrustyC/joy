import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Card } from "./Card.styled"
import Icon from "./Icon"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 60px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  grid-row-gap: 10px;
`

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              title
              description
              author
              image
              manual_pdf
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => frontmatter
  )

  return (
    <Grid>
      {projects.map((project, i) => (
        <Card key={i}>
          <Card.ImageContainer>
            <Card.ImageContainer.Image src={project.image} />
          </Card.ImageContainer>

          <Card.Title>{project.title}</Card.Title>
          <Card.Author>
            by <b>{project.author}</b>
          </Card.Author>
          <Card.Description>{project.description}</Card.Description>
          <Card.Download>
            <a href={project.manual_pdf} download>
              <Icon /> Make
            </a>
          </Card.Download>
        </Card>
      ))}
    </Grid>
  )
}
