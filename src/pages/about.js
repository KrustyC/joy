import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { GeneralHeader as Header } from "../components/Headers"
import { AboutComponent } from "../components/About"
import { Footer } from "../components/Footer"

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.aboutPage};
`

const Main = styled.div`
  max-width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
  margin-bottom: 50px;
`

const About = () => {
  return (
    <>
      <SEO title="About" />
      <Wrapper>
        <Header uploadADesignLink />
        <Main>
          <AboutComponent />
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default About
