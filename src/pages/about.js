import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { GeneralHeader as Header } from "../components/Headers"
import { Footer } from "../components/Footer"

const Wrapper = styled.div`
  background: #ffc74a;
`
const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
  margin-bottom: 50px;
`

const About = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title="About" />
      <Wrapper>
        <Header />
        <Main>This is the about page mate</Main>
        <Footer />
      </Wrapper>
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
