import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: 100px;
  font-weight: 700;

  font-size: 16px;
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
  flex: 1;
  justify-content: flex-end;

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
          Built by{" "}
          <a href="https://dcrestini.me" rel="noopener noreferrer">
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
