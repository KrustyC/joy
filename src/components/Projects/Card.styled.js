import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const ImageContainer = styled.div`
  margin-bottom: 15px;
  height: 230px;
`

const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`

const Title = styled.h3`
  margin: 5px 0 3px 0;
`

const Author = styled.span`
  font-size: 12px;

  b {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const Description = styled.p`
  margin-top: 12px;
  margin-bottom: 0px;
  height: 150px;
  max-height: 150px;
  text-overflow: ellipsis;

  overflow: hidden;
  white-space: wrap;
`

const Download = styled.p`
  margin-top: 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;

  a {
    text-decoration: none;
    color: black;
  }
`

ImageContainer.Image = Image
Card.ImageContainer = ImageContainer
Card.Title = Title
Card.Author = Author
Card.Description = Description
Card.Download = Download

export { Card }
