import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`

const InnerFooter = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copy = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > :first-of-type {
    margin-right: 50px;
  }
`

const Links = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  > a {
    color: black;
    font-weight: bold;
    text-decoration: none;

    &:first-of-type {
      margin-right: 50px;
    }
  }
`

export const Footer = () => (
  <FooterContainer>
    <InnerFooter>
      <Copy>
        <span>2020 Planet Joy</span>
        <span>spreadonejoy@gmail.com</span>
      </Copy>
      <Links>
        <a
          href="https://instagram.com"
          target="blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Links>
    </InnerFooter>
  </FooterContainer>
)
