import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useCycle } from "framer-motion"
import InitialOverlay from "../InitialOverlay"
import LayoutWithCookie from "./LayoutWithCookie"

const Layout = ({ children }) => {
  const [isVisible, onCycle] = useCycle(true, false)

  const onHide = () => onCycle()

  return (
    <>
      <InitialOverlay isVisible={isVisible} onHide={onHide} />
      {!isVisible && <LayoutWithCookie>{children}</LayoutWithCookie>}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
