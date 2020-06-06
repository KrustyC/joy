import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 100%;
  height: auto;
`

export const ImageBottomRight2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-bottom-right-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Image fluid={data.placeholderImage.childImageSharp.fluid} />
}
