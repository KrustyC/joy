import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import projects from "./projects"
import { Card } from "./Card.styled"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              title
              Description
              image
            }
          }
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark)

  const projects = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => frontmatter
  )

  return (
    <Grid>
      {projects.map(project => (
        <Card>
          <Card.Image src={project.image} />
          <Card.Title>{project.title}</Card.Title>
          <Card.Description>{project.Description}</Card.Description>
        </Card>
      ))}
    </Grid>
  )
}
