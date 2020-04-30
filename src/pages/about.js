import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

const Partner = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title="About" />
      <h1>{title}</h1>
      <p>Welcome to about</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export const pageQuery = graphql`
  query GetAbout {
    markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      frontmatter {
        title
      }
    }
  }
`

export default Partner
