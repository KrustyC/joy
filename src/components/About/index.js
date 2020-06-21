import React from "react"
import styled from "styled-components"
import { TopSection } from "./TopSection"
import { YouUpload } from "./YouUpload"
import { WeCreate } from "./WeCreate"
import { UploadADesign } from "./UploadADesign"

const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex: 1;
  }
`

export const AboutComponent = () => (
  <>
    <TopSection />
    <Main>
      <YouUpload />
      <WeCreate />
    </Main>
    <UploadADesign />
  </>
)
