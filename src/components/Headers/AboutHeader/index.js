import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const AboutHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 200px;
  margin-bottom: 1.45rem;
  background: green;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const InnerAboutHeader = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  display: flex;
  background: yellow;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.45rem 0;
`

const StyledLink = styled(Link)`
  margin-right: 20px;
  background: red;
  color: black !important;
  text-decoration: none;
`

const AboutHeader = ({ siteTitle }) => (
  <AboutHeaderWrapper>
    <InnerAboutHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </InnerAboutHeader>
  </AboutHeaderWrapper>
)

AboutHeader.propTypes = {
  siteTitle: PropTypes.string,
}

AboutHeader.defaultProps = {
  siteTitle: ``,
}

export default AboutHeader
