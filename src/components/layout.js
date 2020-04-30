import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const GlobalStyle = createGlobalStyle`
  body {
    /* color: ${props => (props.theme === "purple" ? "purple" : "white")}; */
  }
`

const MainWrapper = styled.div`
  min-height: 67vh;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
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

  return (
    <>
      <GlobalStyle theme="purple" />
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <MainWrapper>
          <main>{children}</main>
        </MainWrapper>
        )}
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
