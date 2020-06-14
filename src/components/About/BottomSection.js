import React from "react"
import styled from "styled-components"
import { Section, SectionLeft, SectionRight } from "./About.styled"
import {
  ImageBottomLeft1,
  ImageBottomRight1,
  ImageBottomRight2,
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
  width: 100%;
  margin-right: 50px;
`

const RightRightImageContainer = styled.div`
  height: 100%;
  width: 100%;
`

const CTA = styled.div`
  background: purple;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
          You can also include a pattern to cut or any element to assemble, if
          your design has one! Don’t worry if you don’t have it!
        </Text>
        <RightImages>
          <RightLeftImageContainer>
            <ImageBottomRight1 />
          </RightLeftImageContainer>

          {/* <RightRightImageContainer /> */}
        </RightImages>
      </SectionRight>
    </Section>
    <CTA>
      <UploadADesign />
    </CTA>
  </>
)
