import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.45rem;
`

const InnerHeader = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.desktop.centralColumn};
  padding: 1.45rem 0;
`

const StyledLink = styled(Link)`
  margin-right: 20px;
  color: black !important;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <InnerHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </InnerHeader>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
