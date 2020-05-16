import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { HomeHeader as Header } from "../components/Headers"
import { Projects } from "../components/Projects"

const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
`

const IndexPage = () => (
  <>
    <SEO title="Home | Joy" />
    <Header />

    <Main>
      <Projects />
    </Main>
  </>
)

export const pageQuery = graphql`
  query GetHome {
    markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
      }
    }
  }
`

export default IndexPage
