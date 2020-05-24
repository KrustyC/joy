import React from "react"
import { Link } from "gatsby"
import { PictureUpload } from "./PictureUpload"
import {
  FormGrid,
  Top,
  Sidebar,
  Main,
  Bottom,
  FormGroup,
  Input,
  Label,
  Submit,
  PrivacyPolicy,
  MultipleImagesWrapper,
  TextAreaWrapper,
  TextArea,
  TextAreaBottom,
} from "./Form.styled"

export const ContactForm = () => (
  <FormGrid>
    <Top align="left">
      <FormGroup>
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" type="text" name="name" />
      </FormGroup>
    </Top>

    <Top align="center">
      <FormGroup>
        <Label htmlFor="name">Your Website</Label>
        <Input id="website" type="text" name="website" />
      </FormGroup>
    </Top>

    <Top align="right">
      <FormGroup>
        <Label htmlFor="name">Your Instagram</Label>
        <Input id="instagram" type="text" name="instagram" />
      </FormGroup>
    </Top>

    <Sidebar align="top">
      <FormGroup>
        <Label htmlFor="designName">
          What is the name <br />
          of your design?
        </Label>
        <Input id="designName" type="text" name="designName" />
      </FormGroup>
    </Sidebar>

    <Sidebar align="bottom">
      <FormGroup>
        <Label as="span">
          Upload a picture of <br />
          your finished design
        </Label>
        <PictureUpload />
      </FormGroup>
    </Sidebar>

    <Main>
      <FormGroup>
        <Label htmlFor="description">
          What is the story of your design?Try to give us details about where it
          lives and what it does on Planet Joy!
        </Label>
        <TextAreaWrapper>
          <TextArea></TextArea>
          <TextAreaBottom>0/260</TextAreaBottom>
        </TextAreaWrapper>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="multiplePictures">
          Upload up to 4 pictures of how to build your design. They will be used
          as instructions, so make them as clear as you can!
        </Label>
        <MultipleImagesWrapper>
          <div>
            <PictureUpload />
          </div>
          <div>
            <PictureUpload />
          </div>
          <div>
            <PictureUpload />
          </div>
          <div>
            <PictureUpload />
          </div>
        </MultipleImagesWrapper>
      </FormGroup>
    </Main>

    <Bottom align="left">
      <Label htmlFor="blueprint">
        If you have a blueprint of your design, upload it here as PDF or JPEG.
        Please make sure the document is clear and{" "}
        <u>it fits in A4 with 1.5cm margins :)</u> ?
      </Label>
      <Input id="blueprint" type="text" name="blueprint" />
    </Bottom>

    <Bottom align="right">
      <Label as="span">We will publish your design as soon as possible.</Label>
      <PrivacyPolicy>
        <input type="checkbox" /> I have read and accepted the&nbsp;
        <Link to="/privacy-policy"> privacy policy</Link>
      </PrivacyPolicy>
      <Submit>Upload Design</Submit>
    </Bottom>
  </FormGrid>
)
