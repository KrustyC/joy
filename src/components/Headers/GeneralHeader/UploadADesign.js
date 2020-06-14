import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 100px;
  height: 190px;
`

const UploadADesign = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "upload-button.png" }) {
        childImageSharp {
          fixed(width: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Image fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default UploadADesign
