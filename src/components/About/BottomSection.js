import React from "react"
import styled from "styled-components"
import { Section, SectionLeft, SectionRight } from "./About.styled"
import { ImageMidLeft1, ImageBottomLeft1 } from "./AboutImages"

console.log(ImageMidLeft1)

const Text = styled.p`
  font-size: 14px;
  max-width: 300px;
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
          <ImageMidLeft1 />
        </RightLeftImageContainer>

        <RightRightImageContainer>
          <ImageMidLeft1 />
        </RightRightImageContainer>
      </RightImages>
    </SectionRight>
  </Section>
)
