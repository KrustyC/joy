import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { isMobile } from "react-device-detect"
import { useCycle } from "framer-motion"
import InitialOverlay from "./InitialOverlay"
import { MobileLayout } from "./Mobile/Layout"

const LayoutContainer = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
`

const Layout = ({ children }) => {
  const [isVisible, onCycle] = useCycle(true, false)

  if (isMobile) {
    return <MobileLayout />
  }

  return (
    <>
      <InitialOverlay isVisible={isVisible} onHide={onCycle} />
      <LayoutContainer show={!isVisible}>{children}</LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
