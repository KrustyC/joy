import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { isMobile } from "react-device-detect"
import Logo from "./Logo"
import { Burger } from "../Burger"
import BackButtonImg from "./BackButtonImg"
import UploadADesign from "./UploadADesign"

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
  align-items: flex-start;
`

const LeftLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`

const RightSide = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`

const RightSideLink = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  :focus,
  :visited {
    text-decoration: none;
    color: black;
  }
`

const GeneralHeader = ({ siteTitle, uploadADesignLink }) => (
  <GeneralHeaderWrapper>
    <InnerGeneralHeader>
      <LeftLink to="/">
        <Logo />
      </LeftLink>
      <RightSide>
        {isMobile ? (
          <Links>
            <Burger />
          </Links>
        ) : (
          <>
            {uploadADesignLink && (
              <RightSideLink to="/upload">
                <UploadADesign />
              </RightSideLink>
            )}
            <RightSideLink css="margin-left: 50px;" to="/">
              <BackButtonImg />
            </RightSideLink>
          </>
        )}
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
