import React from "react"
import styled, { css } from "styled-components"

const Container = styled.label`
  position: relative;
  border: 3px solid black;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;

  ${({ big }) =>
    big &&
    css`
      height: 370px;
      width: 370px;
    `}

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
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

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PictureUpload = ({
  file,
  big,
  fieldName,
  setFieldValue,
  onBlur,
  ...rest
}) => (
  <Container big={big}>
    {!file ? <Text>+</Text> : <Img src={URL.createObjectURL(file)} />}

    <input
      id={fieldName}
      name={fieldName}
      type="file"
      onChange={event => setFieldValue(fieldName, event.currentTarget.files[0])}
      onBlur={() => onBlur && onBlur()}
    />
  </Container>
)
