import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import animationData from "./animation.json"
import { motion, AnimatePresence } from "framer-motion"

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

  svg {
    height: 100% !important;
    width: 100% !important;
  }
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

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
            <Lottie options={defaultOptions} height="80%" width="80%" />
          </InitialOverlayContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InitialOverlay
