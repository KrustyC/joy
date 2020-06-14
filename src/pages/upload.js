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
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
  margin-bottom: 50px;
  font-size: 30px;
  min-height: 60vh;
`

const From = () => {
  return (
    <>
      <SEO title="Contact Us" />
      <Wrapper>
        <Header />
        <Main>
          <ContactForm />
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default From
