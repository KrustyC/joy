import styled from "styled-components"

export const HeaderWrapper = styled.div`
  height: 150px;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const InnerHeader = styled.div`
  width: ${({ theme }) => theme.sizes.desktop.mainArea};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 600px) {
    align-items: flex-end;
  }
`
