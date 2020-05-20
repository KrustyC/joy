import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./Logo"

const GeneralHeaderWrapper = styled.div`
  height: 150px;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const InnerGeneralHeader = styled.div`
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

const GeneralHeader = ({ siteTitle }) => (
  <GeneralHeaderWrapper>
    <InnerGeneralHeader>
      <LeftLink to="/">
        <Logo />
      </LeftLink>
      <RightLink to="/about">Somethin</RightLink>
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
