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
  margin: 5px 0;
`

const Author = styled.span`
  font-size: 14px;

  b {
    text-transform: uppercase;
  }
`

const Description = styled.p``

ImageContainer.Image = Image
Card.ImageContainer = ImageContainer
Card.Title = Title
Card.Author = Author
Card.Description = Description

export { Card }
