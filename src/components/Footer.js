import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 70px;
  font-weight: 700;
  font-size: 16px;

  @media (min-width: 600px) {
    height: 100px;
  }
`

const InnerFooter = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  padding: 15px 0;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`

const Copy = styled.div`
  color: #000000;
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  > :not(:last-child) {
    margin-right: 40px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

const Links = styled.div`
  display: flex;
  color: #000000;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  > a {
    color: black;
    text-decoration: none;

    &:first-of-type {
      margin-right: 40px;
    }
  }
`

export const Footer = () => (
  <FooterContainer>
    <InnerFooter>
      <Copy>
        <span>2020 Planet Joy</span>
        <span>
          <a href="mailto:spreadonejoy@gmail.com">spreadonejoy@gmail.com</a>
        </span>
        <span>
          built by{" "}
          <a
            href="https://dcrestini.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Davide Crestini
          </a>
        </span>
      </Copy>
      <Links>
        <a
          href="https://www.instagram.com/the_planetjoy/"
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
