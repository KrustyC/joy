import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { HomeHeader as Header } from "../components/Headers"
import { Projects } from "../components/Projects"
import { Footer } from "../components/Footer"

const Wrapper = styled.div`
  background: white;
`
const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
  margin-bottom: 50px;
`

const IndexPage = () => (
  <>
    <SEO title="Home | Joy" />
    <Wrapper>
      <Header />
      <Main>
        <Projects />
      </Main>
      <Footer />
    </Wrapper>
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
