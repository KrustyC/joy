import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import { Link } from "gatsby"
import { Section, SectionLeft, SectionRight } from "./About.styled"
import {
  ImageMidLeft,
  ImageMidLeft1,
  ImageMidLeft2,
  ImageMidLeft3,
  ImageMidLeft4,
  ImageMidLeft5,
  ImageMidLeft6,
  ImageMidLeft7,
  ImageMidLeft8,
} from "./AboutImages"
import animationData from "./animation.json"

const Title = styled.h1`
  font-size: 54px;
  font-weight: bold;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Text = styled.p`
  max-width: 350px;
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
  margin-right: 10px;
  margin-top: 30px;
`

const LeftRightImagesContainer = styled.div`
  display: grid;
  flex: 2;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 30px;
`

const RightImages = styled.div`
  width: 100%;
  display: flex;
  flex: 8;
`

const RightLeftImageContainer = styled.div`
  width: 200px;
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  scaleType: "centerCrop",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

export const MidSection = () => (
  <Section css="margin-top: 100px !important; margin-bottom: 0 !important">
    <SectionLeft>
      <Title>You upload</Title>
      <Text>
        A picture of your finished design with its name, a brief story and up to
        8 instruction photos to build it.
      </Text>

      <LeftImages>
        <LeftLeftImageContainer>
          <ImageMidLeft />
        </LeftLeftImageContainer>

        <LeftRightImagesContainer>
          <ImageMidLeft1 />
          <ImageMidLeft2 />
          <ImageMidLeft3 />
          <ImageMidLeft4 />
          <ImageMidLeft5 />
          <ImageMidLeft6 />
          <ImageMidLeft7 />
          <ImageMidLeft8 />
        </LeftRightImagesContainer>
      </LeftImages>
      <Plus to="/upload">+</Plus>
    </SectionLeft>

    <SectionRight>
      <Title>We create</Title>
      <Text>
        A post on Instagram showing your finished design and the instruction
        pictures. Each post includes an illustration we make for your design!
      </Text>
      <RightImages>
        <RightLeftImageContainer>
          <Lottie options={defaultOptions} height={295} width={220} />
        </RightLeftImageContainer>
      </RightImages>
      <Plus to="/upload">+</Plus>
    </SectionRight>
  </Section>
)
