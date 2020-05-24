import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const Main = styled.div`
  background: #ffc74a;
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  margin: 0 auto;
`

const From = () => {
  return (
    <>
      <SEO title="From" />
      <h1>Form</h1>
      <Main>
        <h1>Form</h1>
        <p>Form</p>
      </Main>
    </>
  )
}

export default From
