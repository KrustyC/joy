import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
`

const About = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title="About" />
      <h1>{title}</h1>
      <Main>
        <h1>Privacy Policy</h1>
        <p>Lorem ipsum.</p>
      </Main>
    </>
  )
}

export const pageQuery = graphql`
  query GetAbout {
    markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      frontmatter {
        title
      }
    }
  }
`

export default About
