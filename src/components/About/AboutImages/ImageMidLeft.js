import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 100%;
  height: auto !important;
`

export const ImageMidLeft = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-mid-left.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Image fluid={data.placeholderImage.childImageSharp.fluid} />
}
