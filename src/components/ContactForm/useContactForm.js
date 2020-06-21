import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
  name: "",
  website: "",
  instagram: "@",
  designName: "",
  mainPicture: null,
  description: "",
  blueprint: "",
  privacyPolicy: false,
}

const validationSchema = Yup.object({
  name: Yup.string().required("Please add a name"),
  website: Yup.string(),
  instagram: Yup.string(),
  mainPicture: Yup.mixed().required("Please add an image of your design"),
  designName: Yup.string().required("Please add a name for your design"),
  description: Yup.string()
    .max(260, "Please keep the description below 260 characters")
    .required("Please add a description for your design"),
  privacyPolicy: Yup.bool().oneOf(
    [true],
    "It is required to accept our privacy policy"
  ),
})

const useContactForm = onSubmit => {
  const contactForm = useFormik({
    validationSchema,
    validateOnMount: true,
    initialValues,
    onSubmit,
  })

  return contactForm
}

export default useContactForm
