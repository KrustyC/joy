import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import { Link } from "gatsby"
import { ImageBottomRight1 } from "./AboutImages"
import animationData from "./animation.json"

const WeCreateSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const Instagram = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
`

const Plus = styled(Link)`
  font-size: 40px;
  font-weight: 200;
  color: black !important;
  text-decoration: none;
  margin-top: 10px;
`

const RightImages = styled.div`
  width: 100%;
  display: flex;
`

const InstagramContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const PrintableImageContainer = styled.div`
  width: 100%;
`

const Printable = styled.div``

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  scaleType: "centerCrop",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

export const WeCreate = () => (
  <WeCreateSection>
    <Instagram>
      <Title>We create</Title>
      <Text>
        A post on Instagram showing your finished design, the instructions and a
        unique illustration we make for you!
      </Text>
      <RightImages>
        <InstagramContainer>
          <Lottie options={defaultOptions} height={375} width={280} />
        </InstagramContainer>
      </RightImages>
      <Plus to="/upload">+</Plus>
    </Instagram>
    <Printable>
      <Text>
        A printable version of the post. In case you have uploaded a pattern, we
        {"'"}ll create one extra page for it.
      </Text>
      <RightImages>
        <PrintableImageContainer>
          <ImageBottomRight1 />
        </PrintableImageContainer>
      </RightImages>
    </Printable>
  </WeCreateSection>
)
