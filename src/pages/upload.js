import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { GeneralHeader as Header } from "../components/Headers"
import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.contactUsPage};
`

const Main = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  font-size: 30px;
  min-height: 60vh;
  padding: 0 100px;
  display: flex;
  justify-content: center;
`

const Inner = styled.div`
  width: 100%;

  @media (min-width: 1280px) {
    width: ${({ theme }) => theme.sizes.desktop.mainArea};
  }
`

const From = () => {
  return (
    <>
      <SEO title="Upload a Design" />
      <Wrapper>
        <Header />
        <Main>
          <Inner>
            <ContactForm />
          </Inner>
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default From
