import React from "react"
import styled from "styled-components"
import { Section, SectionLeft, SectionRight } from "./About.styled"
import { ImageBottomLeft1, ImageBottomRight1, ImageBottomRight2 } from "./AboutImages"

console.log(ImageBottomRight1)

const Text = styled.p`
  font-size: 16px;
  max-width: 450px;
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

export const BottomSection = () => (
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

        <RightRightImageContainer>
          <ImageBottomRight2 />
        </RightRightImageContainer>
      </RightImages>
    </SectionRight>
  </Section>
)
