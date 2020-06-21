import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { isMobile } from "react-device-detect"
import { GeneralHeader as Header } from "../components/Headers"
import { Markdown } from "../components/Markdown"
import { Footer } from "../components/Footer"

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.privacyPolicyPage};
`
const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
`

const Text = styled.div`
  width: 100%;
  font-size: 20px !important;

  @media (min-width: 600px) {
    width: 60vw;
  }
`

const PrivacyPolicyPage = ({ data }) => {
  const { title, text } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title="Privacy Policy" />
      <Wrapper>
        <Header linkConf={{ to: "/upload", label: "contact us" }} />
        <Main>
          <h1>{title}</h1>
          <Text>
            <Markdown md={text} />
          </Text>
        </Main>
        {!isMobile && <Footer />}
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
