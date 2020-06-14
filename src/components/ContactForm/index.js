import React from "react"
import { Link } from "gatsby"
import { PictureUpload } from "./PictureUpload"
import { FileUpload } from "./FileUpload"
import {
  Text,
  Form,
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
  ImagesAndBlueprintWrapper,
  TextAreaWrapper,
  ErrorMessage,
  TextArea,
  TextAreaBottom,
  LoadingStatus,
} from "./Form.styled"
import { SuccessStatus } from "./SuccessStatus"
import useNetlifyForm from "./useNetlifyForm"
import useContactForm from "./useContactForm"

export const ContactForm = () => {
  const [state, onSubmit, onResetNetlifyForm] = useNetlifyForm()
  const contactForm = useContactForm(onSubmit)

  const {
    values,
    isValid,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    resetForm,
  } = contactForm

  const onReset = () => {
    resetForm()
    onResetNetlifyForm()
  }

  if (state.success) {
    return <SuccessStatus onReset={onReset} />
  }

  return (
    <>
      <Text>
        Everything that you upload here will be posted on Instagram and used to
        make a printable version of the instructions! Make sure everything fits
        within 10MB.
      </Text>
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={contactForm.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <Top align="left">
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              {...contactForm.getFieldProps("name")}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </FormGroup>
        </Top>

        <Top align="center">
          <FormGroup>
            <Label htmlFor="name">Your Website</Label>
            <Input
              id="website"
              type="text"
              name="website"
              {...contactForm.getFieldProps("website")}
            />
            {errors.website && touched.website && (
              <ErrorMessage>{errors.website}</ErrorMessage>
            )}
          </FormGroup>
        </Top>

        <Top align="right">
          <FormGroup>
            <Label htmlFor="name">Your Instagram</Label>
            <Input
              id="instagram"
              type="text"
              name="instagram"
              {...contactForm.getFieldProps("instagram")}
            />
            {errors.instagram && touched.instagram && (
              <ErrorMessage>{errors.instagram}</ErrorMessage>
            )}
          </FormGroup>
        </Top>

        <Sidebar align="top">
          <FormGroup>
            <Label htmlFor="designName">
              What is the name <br />
              of your design?
            </Label>
            <Input
              id="designName"
              type="text"
              name="designName"
              {...contactForm.getFieldProps("designName")}
            />
          </FormGroup>
          {errors.designName && touched.designName && (
            <ErrorMessage>{errors.designName}</ErrorMessage>
          )}
        </Sidebar>

        <Sidebar align="bottom">
          <FormGroup>
            <Label as="span">
              Upload a picture of <br />
              your finished design
            </Label>
            <PictureUpload
              file={values.mainPicture}
              fieldName="mainPicture"
              setFieldValue={setFieldValue}
              onBlur={() => setFieldTouched("mainPicture")}
            />
            {errors.mainPicture && touched.mainPicture && (
              <ErrorMessage>{errors.mainPicture}</ErrorMessage>
            )}
          </FormGroup>
        </Sidebar>

        <Main>
          <FormGroup>
            <Label htmlFor="description">
              What is the story of your design?Try to give us details about
              where it lives and what it does on Planet Joy!
            </Label>
            <TextAreaWrapper>
              <TextArea
                id="description"
                type="text"
                name="description"
                {...contactForm.getFieldProps("description")}
              />
              <TextAreaBottom>{values.description.length}/260</TextAreaBottom>
            </TextAreaWrapper>
            {errors.description && touched.description && (
              <ErrorMessage>{errors.description}</ErrorMessage>
            )}
          </FormGroup>

          <ImagesAndBlueprintWrapper>
            <FormGroup css="flex: 2; height: 100%;">
              <Label htmlFor="multiplePictures" css="width: 350px;">
                Upload up to 8 clear pictures of how to build your design!
              </Label>
              <MultipleImagesWrapper>
                <div>
                  <PictureUpload
                    file={values.buildPicture1}
                    fieldName="buildPicture1"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div>
                  <PictureUpload
                    file={values.buildPicture2}
                    fieldName="buildPicture2"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div>
                  <PictureUpload
                    file={values.buildPicture3}
                    fieldName="buildPicture3"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div>
                  <PictureUpload
                    file={values.buildPicture4}
                    fieldName="buildPicture4"
                    setFieldValue={setFieldValue}
                  />
                </div>

                <div>
                  <PictureUpload
                    file={values.buildPicture5}
                    fieldName="buildPicture5"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div>
                  <PictureUpload
                    file={values.buildPicture6}
                    fieldName="buildPicture6"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div>
                  <PictureUpload
                    file={values.buildPicture7}
                    fieldName="buildPicture7"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div>
                  <PictureUpload
                    file={values.buildPicture8}
                    fieldName="buildPicture8"
                    setFieldValue={setFieldValue}
                  />
                </div>
              </MultipleImagesWrapper>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="blueprint">
                If your design has a template, upload it as PDF in A4 format.
              </Label>
              <div>
                <FileUpload
                  file={values.blueprint}
                  fieldName="blueprint"
                  setFieldValue={setFieldValue}
                />
              </div>
            </FormGroup>
          </ImagesAndBlueprintWrapper>
        </Main>

        <Bottom align="left">
          <Label as="span">
            We will publish your design as soon as possible.
            <br />
            Don{"'"}t worry, it may take a while to upload.
          </Label>
          <PrivacyPolicy>
            <input
              id="privacyPolicy"
              name="privacyPolicy"
              type="checkbox"
              {...contactForm.getFieldProps("privacyPolicy")}
            />{" "}
            <p>
              I have read and accepted the&nbsp;
              <Link to="/privacy-policy">privacy policy</Link>
            </p>
          </PrivacyPolicy>
          {errors.privacyPolicy && touched.privacyPolicy && (
            <ErrorMessage>{errors.privacyPolicy}</ErrorMessage>
          )}

          <Submit type="submit" disabled={!isValid || state.pending}>
            {!state.pending ? (
              "Upload Design"
            ) : (
              <LoadingStatus>
                <div />
                <div />
                <div />
                <div />
              </LoadingStatus>
            )}
          </Submit>
        </Bottom>
      </Form>
    </>
  )
}
