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
`

const Text = styled.h3`
  margin-bottom: 50px;
  font-size: 30px;
  max-width: 600px;
  line-height: 40px;
`

const From = () => {
  return (
    <>
      <SEO title="Contact Us" />
      <Wrapper>
        <Header />
        <Main>
          <Text>
            Everything that you upload here will be posted on Instagram and used
            to make a printable version of the instructions! Make sure
            everything fits within 10MB.
          </Text>
          {/* <ContactForm /> */}
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default From
