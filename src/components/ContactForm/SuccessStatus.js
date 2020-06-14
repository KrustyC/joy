import React from "react"
import styled from "styled-components"
import { Text } from "./Form.styled"
import FormSuccessful from "./FormSuccessful"

const Container = styled.div`
  position: relative;

  img {
    object-fit: contain !important;
  }
`

const CTA = styled.span`
  position: absolute;
  font-size: 16px;
  top: 10px;
  left: 0px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  cursor: pointer;
  z-index: 100;
`

export const SuccessStatus = ({ onReset }) => (
  <>
    <Text>
      Thank you so much for uploading your wonderful creation. We will review
      you and post it as soon as possible!
    </Text>
    <Container>
      <CTA onClick={onReset}>Upload another</CTA>
      <FormSuccessful />
    </Container>
  </>
)
