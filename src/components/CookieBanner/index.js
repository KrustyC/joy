import React from "react"
import styled, { css } from "styled-components"
import Portal from "../Portal"
import Eyes from "./Eyes"

const CookieContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100vw;
    height: auto;
    background: ${theme.colors.primary};
    color: black;
    z-index: 1;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;

    @media (min-width: 600px) {
      height: 100px;
    }
  `}
`

const InnerContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 20px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 600px) {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

const ImageContainer = styled.div`
  width: 150px;
`

const Info = styled.div`
  height: 100%;
  flex: 1;
`

const Text = styled.p`
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    padding-right: 100px;
    height: 100%;
    margin: 0;
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 600px) {
    justify-content: space-between;
    width: 20%;
  }
`

const Button = styled.button`
  font-size: 18px;
  font-weight: 900;
  background: transparent;
  color: black !important;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0;
  padding: 0;

  :first-of-type {
    margin-right: 40px;
  }

  @media (min-width: 600px) {
    margin-right: 0;
  }
`

const CookieBanner = ({ onAllowCookie, onForbidCookie }) => (
  <Portal id="cookie-banner-portal">
    <CookieContainer>
      <InnerContainer>
        <ImageContainer>
          <Eyes />
        </ImageContainer>
        <Info>
          <Text>
            By using this website you agree to our use of cookies. We use
            cookies to provide you with a great experience and to help our
            website run effectively.
          </Text>
        </Info>

        <Buttons>
          <Button primary onClick={onAllowCookie}>
            Accept
          </Button>
          <Button onClick={onForbidCookie}>No, thanks</Button>
        </Buttons>
      </InnerContainer>
    </CookieContainer>
  </Portal>
)

export default CookieBanner
