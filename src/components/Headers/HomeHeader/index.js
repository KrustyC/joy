import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
import Logo from "./Logo"
import About from "./About"
import { Burger } from "../Burger"
import { HeaderWrapper, InnerHeader } from "../Header.styled"

const LeftLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const RightLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const Header = () => (
  <HeaderWrapper>
    <InnerHeader>
      <LeftLink to="/">
        <Logo />
      </LeftLink>

      {isMobile ? (
        <Links>
          <Burger />
        </Links>
      ) : (
        <RightLink to="/about">
          <About />
        </RightLink>
      )}
    </InnerHeader>
  </HeaderWrapper>
)

export default Header
