import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

export const ImageMidRight2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-mid-right-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Image fluid={data.placeholderImage.childImageSharp.fluid} />
}
