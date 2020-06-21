import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
import {
  UploadADesign as UploadADesignImage,
  MobileCreature,
} from "./AboutImages"

const CTA = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CTALink = styled(Link)`
  min-width: 120px;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  :focus,
  :visited {
    text-decoration: none;
    color: black;
  }
`

const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;

  padding-bottom: 50px;
`

const MobileCreatureContainer = styled.div`
  margin-top: 20px;
`

const MobileText = styled.p`
  font-size: 32px;
  font-weight: 600;
`

export const UploadADesign = () => {
  if (isMobile) {
    return (
      <MobileViewContainer>
        <MobileText>
          To Upload your design, please visit the desktop version of the
          website.
        </MobileText>
        <MobileCreatureContainer>
          <MobileCreature />
        </MobileCreatureContainer>
      </MobileViewContainer>
    )
  }

  return (
    <CTA>
      <CTALink to="/upload">
        <UploadADesignImage />
      </CTALink>
    </CTA>
  )
}
