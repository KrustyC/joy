import styled from "styled-components"

export const Text = styled.h3`
  margin-bottom: 50px;
  font-size: 30px;
  max-width: 600px;
  line-height: 40px;
`

export const Form = styled.form`
  margin-top: 100px;
  display: grid;
  grid-row-gap: 80px;
  grid-column-gap: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "top-left top-center top-right"
    "sidebar-top main main"
    "sidebar-bottom main main"
    "bottom-left bottom-left bottom-right";
`

const BaseArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const Top = styled(BaseArea)`
  grid-area: ${({ align }) => `top-${align}`};
  height: auto;
`

export const Sidebar = styled(BaseArea)`
  grid-area: ${({ align }) => `sidebar-${align}`};
  width: 100%;
`

export const Main = styled(BaseArea)`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`

export const Bottom = styled(BaseArea)`
  grid-area: ${({ align }) => `bottom-${align}`};
  justify-content: space-between;
  align-items: space-between;
`

export const FormGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 26px;
  font-weight: bold;
  line-height: 30px !important;
  margin-bottom: 10px;
`

export const Input = styled.input`
  border: 3px solid black;
  width: 100%;
  height: 40px;
  font-size: 20px;
`

export const TextAreaWrapper = styled.div`
  border: 3px solid black;
  width: 100%;
  height: auto;
`

export const TextArea = styled.textarea`
  border: none;
  width: 100%;
  margin: 0 !important;
  height: 40px;
  resize: none;
  height: 100px;
  font-size: 20px;
  padding: 5px;
`

export const TextAreaBottom = styled.div`
  border: none;
  background: white;
  margin-top: 0;
  width: 100%;
  height: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  font-weight: bold;
  margin-top: -15px;
`

export const ImagesAndBlueprintWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`

export const MultipleImagesWrapper = styled.div`
  width: 75%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  > div {
    width: 100%;
  }
`

export const PrivacyPolicy = styled.div`
  font-size: 16px;
  height: 50px;

  display: flex;
  align-items: flex-start;
  margin-top: 20px;

  input {
    margin-right: 8px;
  }

  p {
    line-height: 13px;
    a {
      color: black !important;
    }
  }
`

export const ErrorMessage = styled.span`
  color: white;
  font-size: 16px;
`

export const Submit = styled.button`
  background: black;
  color: white;
  font-size: 16px;
  border: 0;
  padding: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 350px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.6;
  }
`

export const LoadingStatus = styled.span`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
