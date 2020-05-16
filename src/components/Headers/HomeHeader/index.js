import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./Logo"
import About from "./About"

const HeaderWrapper = styled.div`
  height: 150px;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const InnerHeader = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const LeftLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
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
      <RightLink to="/about">
        <About />
      </RightLink>
    </InnerHeader>
  </HeaderWrapper>
)

export default Header
