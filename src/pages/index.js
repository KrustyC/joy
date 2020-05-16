import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Projects } from "../components/Projects"

const IndexPage = () => (
  <>
    <SEO title="Home | Joy" />
    <h1>Joy</h1>
    <p>This is joy.</p>

    <Projects />
  </>
)

export const pageQuery = graphql`
  query GetHome {
    markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
      }
    }
  }
`

export default IndexPage
