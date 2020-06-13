import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Section, SectionLeft, SectionRight } from "./About.styled"
import {
  ImageMidLeft,
  ImageMidLeft1,
  ImageMidLeft2,
  ImageMidLeft3,
  ImageMidLeft4,
  ImageMidRight1,
  ImageMidRight2,
} from "./AboutImages"

const Title = styled.h1`
  font-size: 54px;
  font-weight: 200;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Text = styled.p`
  font-size: 16px;
  max-width: 450px;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Plus = styled(Link)`
  font-size: 40px;
  flex: 1;
  font-weight: 200;
  color: black !important;
  text-decoration: none;
  margin: 30px 0;
  flex: 1;
`

const LeftImages = styled.div`
  width: 100%;
  display: flex;
  height: 370px;
  flex: 8;
  align-items: center;

  img {
    height: auto !important;
  }
`

const LeftLeftImageContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 30px;
  margin-top: 40px;
`

const LeftRightImagesContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 40px;
`

const RightImages = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  flex: 8;
`

const RightLeftImageContainer = styled.div`
  margin-right: 30px;
  flex: 1;
`

const RightRightImageContainer = styled.div`
  flex: 1;
`

export const MidSection = () => (
  <Section css="margin-bottom: 0 !important">
    <SectionLeft>
      {/* <div> */}
      <Title>You upload</Title>
      <Text>
        A picture of your finished design with its name, a brief story and up to
        4 instruction photos to build it.
      </Text>
      {/* </div> */}
      <LeftImages>
        <LeftLeftImageContainer>
          <ImageMidLeft />
        </LeftLeftImageContainer>

        <LeftRightImagesContainer>
          <ImageMidLeft1 />
          <ImageMidLeft2 />
          <ImageMidLeft3 />
          <ImageMidLeft4 />
        </LeftRightImagesContainer>
      </LeftImages>
      <Plus to="/contact-us">+</Plus>
    </SectionLeft>

    <SectionRight>
      <Title>We create</Title>
      <Text>
        A post on Instagram showing your finished design and the instruction
        pictures. Each post includes an illustration we make for your design!
      </Text>
      <RightImages>
        <RightLeftImageContainer>
          <ImageMidRight1 />
        </RightLeftImageContainer>
        <RightRightImageContainer>
          <ImageMidRight2 />
        </RightRightImageContainer>
      </RightImages>
      <Plus to="/contact-us">+</Plus>
    </SectionRight>
  </Section>
)
