import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 300px;
  height: 240px;
`

export const MobileCreature = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mobile-creature.png" }) {
        childImageSharp {
          fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Image fixed={data.placeholderImage.childImageSharp.fixed} />
}
