import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

const Partner = () => {
  // const { title } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title="About" />
      <h1>About</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

// export const pageQuery = graphql`
//   query GetAbout {
//     markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export default Partner
