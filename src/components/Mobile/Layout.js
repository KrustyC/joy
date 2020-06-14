import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import animationData from "./animation.json"

const MobileView = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 0 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
  color: #000000;
`

const AnimationContainer = styled.div`
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 14px;
  text-align: center;
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
}

export const MobileLayout = () => (
  <MobileView>
    <AnimationContainer>
      <Lottie options={defaultOptions} height={"100%"} width="100%" />
    </AnimationContainer>
    <Text>
      Hi, the mobile version of Joy is currently under development.
      <br />
      Please use a PC to view the website :)
    </Text>
  </MobileView>
)
