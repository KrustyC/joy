import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
  name: "",
  website: "",
  instagram: "",
  designName: "",
  mainPicture: null,
  description: "",
  blueprint: "",
  privacyPolicy: false,
}

const validationSchema = Yup.object({
  name: Yup.string().required("Please add a name"),
  website: Yup.string().url(
    "Please add a link in the form of http://example.com"
  ),
  instagram: Yup.string().url(
    "Please add a n instagram link in the form of http://instagram.com/username"
  ),
  mainPicture: Yup.mixed().required("Please add an image of your design"),
  designName: Yup.string().required("Please add a name for your design"),
  description: Yup.string()
    .max(260, "Please keep the description below 260 characters")
    .required("Please add a description for your design"),
  blueprint: Yup.string(),
  privacyPolicy: Yup.bool().oneOf(
    [true],
    "It is required to accept our privacy policy"
  ),
})

const useContactForm = onSubmit => {
  const contactForm = useFormik({
    validationSchema,
    isInitialValid: false,
    initialValues,
    onSubmit,
  })

  return contactForm
}

export default useContactForm
