import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  ImageMidLeft,
  ImageMidLeft1,
  ImageMidLeft2,
  ImageMidLeft3,
  ImageMidLeft4,
  ImageBottomLeft1,
} from "./AboutImages"

const YouUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;

  @media (min-width: 600px) {
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 0px;

    margin-right: 50px;
  }
`

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    margin-right: 100px;
  }
`

const Title = styled.h1`
  font-weight: bold;
  display: flex;
  flex-direction: column;

  font-size: 40px;
  @media (min-width: 600px) {
    font-size: 54px;
  }
`

const Text = styled.p`
  font-size: 20px;
  max-width: 350px;
`

const Plus = styled(Link)`
  font-size: 40px;
  font-weight: 200;
  color: black !important;
  text-decoration: none;
  margin-top: 10px;
`

const LeftImages = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;

    width: 90%;
    height: 370px;
    align-items: center;

    img {
      height: auto !important;
    }
  }
`

const LeftLeftImageContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    margin-bottom: 0px;
    margin-right: 10px;
  }
`

const LeftRightImagesContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const BluePrint = styled.div`
  width: 100%;
`

const BlueprintImageContainer = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: 600px) {
    width: 80%;
  }
`

export const YouUpload = () => (
  <YouUploadSection>
    <Instructions>
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
        </LeftRightImagesContainer>
      </LeftImages>
      <Plus to="/upload">+</Plus>
    </Instructions>
    <BluePrint>
      <Text>
        You can also include graphic elements or a foldable pattern to print
        and cut out!
      </Text>
      <BlueprintImageContainer>
        <ImageBottomLeft1 />
      </BlueprintImageContainer>
    </BluePrint>
  </YouUploadSection>
)
