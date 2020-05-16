import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
`

const Image = styled.img`
  height: 300px;
  width: 300px;
`

const Title = styled.h3``
const Description = styled.p``

Card.Image = Image
Card.Title = Title
Card.Description = Description

export { Card }
