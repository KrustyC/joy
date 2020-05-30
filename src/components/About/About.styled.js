import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
`

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 100px;
`

export const SectionRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`