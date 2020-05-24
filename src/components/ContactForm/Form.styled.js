import styled from "styled-components"

export const FormGrid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-areas:
    "top top top"
    "sidebar main main"
    "sidebar main main"
    "bottom bottom bottom";
`

export const Top = styled.div`
  grid-area: top;
  height: auto;
  display: flex;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  background: green;
`

export const Main = styled.div`
  grid-area: main;
  background: purple;
`

export const Bottom = styled.div`
  grid-area: bottom;
  background: blue;
`

export const FormGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 30px;
  }
`

export const Label = styled.label`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Input = styled.input`
  border: 3px solid black;
  width: 100%;
  height: 45px;
`
