import React from "react"
import PropTypes from "prop-types"
import { useCycle } from "framer-motion"
import InitialOverlay from "./InitialOverlay"

const Layout = ({ children }) => {
  const [isVisible, onCycle] = useCycle(true, false)

  return (
    <>
      <InitialOverlay isVisible={isVisible} onHide={onCycle} />
      {!isVisible && <>{children}</>}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
