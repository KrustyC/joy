import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useCycle } from "framer-motion"
import { isMobile } from "react-device-detect"
import InitialOverlay from "./InitialOverlay"

const LayoutContainer = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
`

const Layout = ({ children }) => {
  const [isVisible, onCycle] = useCycle(true, false)

  const onHide = () => {
    // if (isMobile) {
    //   return
    // }

    onCycle()
  }

  return (
    <>
      <InitialOverlay isVisible={isVisible} onHide={onHide} />
      <LayoutContainer show={!isVisible}>
        {children}
        {/* {!isMobile && children} */}
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
