import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "./src/components/layout"

const GlobalStyle = createGlobalStyle`
  
`

const theme = {
  colors: {
    primary: "#9D8DF1",
    text: "#5A5A5A",
    aboutPage: "#ffc74a",
    privacyPolicyPage: "#b8cdf8",
    contactUsPage: "#ff958c",
  },
  sizes: {
    desktop: {
      mainArea: "88vw",
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
