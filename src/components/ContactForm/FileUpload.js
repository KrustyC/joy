import React from "react"
import styled from "styled-components"

const Container = styled.label`
  position: relative;
  width: 192px;
  min-height: 270px;
  border: 3px solid black;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

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

const Embed = styled.embed`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const FileUpload = ({
  file,
  fieldName,
  setFieldValue,
  onBlur,
  ...rest
}) => (
  <Container {...rest}>
    {!file ? (
      <Text>+</Text>
    ) : (
      <Embed
        src={URL.createObjectURL(file)}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
      />
    )}

    <input
      id={fieldName}
      name={fieldName}
      type="file"
      accept=".pdf"
      onChange={event => setFieldValue(fieldName, event.currentTarget.files[0])}
      onBlur={() => onBlur && onBlur()}
    />
  </Container>
)
