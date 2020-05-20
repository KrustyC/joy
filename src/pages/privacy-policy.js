import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Footer } from "../components/Footer"
import { GeneralHeader as Header } from "../components/Headers"

const Wrapper = styled.div`
  background: mediumaquamarine;
`
const Main = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
  margin-bottom: 50px;
`

const PrivacyPolicyPage = () => (
  <>
    <SEO title="Privacy Policy" />
    <Header />
    <Wrapper>
      <Main>
        <h1>Privacy Policy</h1>
        <p>Lorem ipsum.</p>
      </Main>
      <Footer />
    </Wrapper>
  </>
)

export default PrivacyPolicyPage
