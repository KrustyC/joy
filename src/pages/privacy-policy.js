import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { GeneralHeader as Header } from "../components/Headers"
import { Markdown } from "../components/Markdown"
import { Footer } from "../components/Footer"

const Wrapper = styled.div`
  background: mediumaquamarine;
`
const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
  margin-bottom: 50px;
`

const Text = styled.div`
  width: 60vw;
`

const PrivacyPolicyPage = ({ data }) => {
  const { title, text } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title="Privacy Policy" />
      <Wrapper>
        <Header />
        <Main>
          <h1>{title}</h1>
          <Text>
            <Markdown md={text} />
          </Text>
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}

export const pageQuery = graphql`
  query GetPrivacyPolicy {
    markdownRemark(fileAbsolutePath: { regex: "/privacy-policy/" }) {
      frontmatter {
        title
        text
      }
    }
  }
`

export default PrivacyPolicyPage
