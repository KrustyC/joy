import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import { isMobile } from "react-device-detect"
import { motion, AnimatePresence } from "framer-motion"
import browserAnimationData from "./browser-animation.json"
import mobileAnimationData from "./mobile-animation-wait.json"

const InitialOverlayContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 200;
  overflow: hidden;

  > div {
    width: 70vw !important;
    height: 90vh !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const InitialOverlay = ({ isVisible, onHide }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="child"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <InitialOverlayContainer onClick={onHide}>
            {!isMobile ? (
              <Lottie
                height="80%"
                width="80%"
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: browserAnimationData,
                }}
              />
            ) : (
              <Lottie
                height={"70%"}
                width="70%"
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: mobileAnimationData,
                }}
              />
            )}
          </InitialOverlayContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InitialOverlay
