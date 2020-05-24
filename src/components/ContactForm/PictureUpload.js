import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  width: 100%;
  border: 3px solid black;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100%;
`

const Text = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.contactUsPage};
`

export const PictureUpload = ({ size }) => (
  <Container>
    <Text>+</Text>
  </Container>
)
