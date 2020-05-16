import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import InitialOverlay from "./InitialOverlay"
import { useCycle } from "framer-motion"

const MainWrapper = styled.div`
  min-height: 67vh;
  max-width: ${({ theme }) => theme.sizes.desktop.centralColumn};
  margin: 0 auto;
`

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isVisible, onCycle] = useCycle(true, false)

  return (
    <>
      <InitialOverlay isVisible={isVisible} onHide={onCycle} />
      {!isVisible && (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainWrapper>
            <main>{children}</main>
          </MainWrapper>
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
