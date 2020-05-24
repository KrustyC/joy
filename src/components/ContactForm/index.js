import React from "react"

import {
  FormGrid,
  Top,
  Sidebar,
  Main,
  Bottom,
  FormGroup,
  Input,
  Label,
} from "./Form.styled"

export const ContactForm = () => (
  <FormGrid>
    <Top>
      <FormGroup>
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" type="text" name="name" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="name">Your Website</Label>
        <Input id="website" type="text" name="website" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="name">Your Instagram</Label>
        <Input id="instagram" type="text" name="instagram" />
      </FormGroup>
    </Top>

    <Sidebar>Sidebar</Sidebar>

    <Main>Main</Main>

    <Bottom>Qui ci sta il Bottom</Bottom>
  </FormGrid>
)
