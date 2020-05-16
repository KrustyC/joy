import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "./src/components/Layout"

const GlobalStyle = createGlobalStyle`
  
`

const theme = {
  colors: {
    primary: "#F89730",
    text: "#5A5A5A",
  },
  sizes: {
    desktop: {
      centralColumn: "1200px",
    },
  },
}

export default function wrapPageElement({ element, props }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout {...props}>{element}</Layout>
      </>
    </ThemeProvider>
  )
}
