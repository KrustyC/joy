import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "./src/components/Layout"

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5,h6, p, label {
    color: #000000 !important;
  }
`

const theme = {
  colors: {
    primary: "#9D8DF1",
    text: "#000000",
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
