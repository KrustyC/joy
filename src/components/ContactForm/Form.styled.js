import styled from "styled-components"

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
  line-height: 30px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  border: 3px solid black;
  width: 100%;
  height: 40px;
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
  font-size: 16px;
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

export const MultipleImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-self: flex-end;

  > div {
    flex: 1;
    width: 100%;
    :not(:last-of-type) {
      margin-right: 30px;
    }
  }
`

export const PrivacyPolicy = styled.div`
  font-size: 16px;
  height: 50px;

  display: flex;
  align-items: center;
  input {
    margin-right: 8px;
  }
  a {
    color: black !important;
  }
`

export const Submit = styled.button`
  background: black;
  color: white;
  font-size: 16px;
  border: 0;
  padding: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 100%;
  height: 40px;

  &:disabled {
    opacity: 0.6;
  }
`
