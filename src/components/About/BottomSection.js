import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Section, SectionLeft, SectionRight } from "./About.styled"
import {
  ImageBottomLeft1,
  ImageBottomRight1,
} from "./AboutImages"
import UploadADesign from "./UploadADesign"

const Text = styled.p`
  font-size: 16px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
`

const LeftImageContainer = styled.div`
  max-width: 80%;
  display: flex;
`

const RightImages = styled.div`
  display: flex;
`

const RightLeftImageContainer = styled.div`
  height: 500px;
  width: 60%;
  margin-right: 50px;
`

const CTA = styled.div`
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

export const BottomSection = () => (
  <>
    <Section>
      <SectionLeft>
        <Text>
          You can also include a pattern to cut or any element to assemble, if
          your design has one! Don’t worry if you don’t have it!
        </Text>
        <LeftImageContainer>
          <ImageBottomLeft1 />
        </LeftImageContainer>
      </SectionLeft>

      <SectionRight>
        <Text>
          A printable version of the post. In case you have uploaded a pattern,
          we{"'"}ll create one extra page for it.
        </Text>
        <RightImages>
          <RightLeftImageContainer>
            <ImageBottomRight1 />
          </RightLeftImageContainer>
        </RightImages>
      </SectionRight>
    </Section>
    <CTA>
      <CTALink to="/upload">
        <UploadADesign />
      </CTALink>
    </CTA>
  </>
)
