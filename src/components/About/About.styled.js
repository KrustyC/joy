import styled from "styled-components"

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 600px) {
    margin-right: 50px;
  }
`

export const SectionRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
