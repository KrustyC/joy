import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { isMobile } from "react-device-detect"
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
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <Header />
      <Main>
        <Projects />
      </Main>
      {!isMobile && <Footer />}
      
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
