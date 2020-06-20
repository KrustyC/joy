import React from "react"
import styled, { css } from "styled-components"
import { LoadingStatus } from "./Form.styled"

const CLOUD_NAME = "dpwj0qz0d"
const CLOUDINARY_UPLOAD_PRESET = "n4ayy5mq"

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
}) => {
  const [pending, setPending] = React.useState(false)

  const onPhotoSelected = event => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
    setPending(true)
    const formData = new FormData()
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
    formData.append("file", event.currentTarget.files[0])

    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        setFieldValue(fieldName, res.url)
      })
      .catch(err => {
        console.log("ERROR", err)
      })
      .finally(() => setPending(false))
  }

  console.log(file)

  return (
    <Container big={big}>
      {!file ? (
        <Text>
          {pending ? (
            <LoadingStatus color="#ff958c">
              <div />
              <div />
              <div />
              <div />
            </LoadingStatus>
          ) : (
            "+"
          )}
        </Text>
      ) : (
        <Img src={file} />
      )}

      <input
        id={fieldName}
        name={fieldName}
        type="file"
        accept="image/*"
        multiple="multiple"
        onChange={onPhotoSelected}
        onBlur={() => onBlur && onBlur()}
      />
    </Container>
  )
}
