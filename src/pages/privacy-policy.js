import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"

const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
`

const PrivacyPolicyPage = () => (
  <>
    <SEO title="Privacy Policy" />
    <Main>
      <h1>Privacy Policy</h1>
      <p>Lorem ipsum.</p>
    </Main>
  </>
)

export default PrivacyPolicyPage
