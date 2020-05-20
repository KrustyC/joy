import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const GeneralHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 200px;
  margin-bottom: 1.45rem;
  background: green;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const InnerGeneralHeader = styled.div`
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

const GeneralHeader = ({ siteTitle }) => (
  <GeneralHeaderWrapper>
    <InnerGeneralHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/General">General</StyledLink>
    </InnerGeneralHeader>
  </GeneralHeaderWrapper>
)

GeneralHeader.propTypes = {
  siteTitle: PropTypes.string,
}

GeneralHeader.defaultProps = {
  siteTitle: ``,
}

export default GeneralHeader
