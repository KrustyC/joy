import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./Logo"
import BackButtonImg from "./BackButtonImg"
import EyeButtonImg from "./EyeButtonImg"

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
  flex: 1;
`

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;

  background: green;
`

const RightSideLink = styled(Link)`
  flex: 1;
  display: flex;
  background: red;
  flex-direction: column;
  min-width: 120px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  :focus,
  :visited {
    text-decoration: none;
    color: black;
  }

  span {
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
`

const GeneralHeader = ({ siteTitle, linkConf }) => (
  <GeneralHeaderWrapper>
    <InnerGeneralHeader>
      <LeftLink to="/">
        <Logo />
      </LeftLink>
      <RightSide>
        {linkConf && (
          <RightSideLink to={linkConf.to}>
            <span>{linkConf.label}</span>
            <EyeButtonImg />
          </RightSideLink>
        )}
        <RightSideLink to="../">
          <span>back</span>
          <BackButtonImg />
        </RightSideLink>
      </RightSide>
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
