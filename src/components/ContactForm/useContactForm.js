import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
  name: "ddd",
  website: "",
  instagram: "",
  designName: "dd",
  description: "ddd",
  blueprint: "",
  privacyPolicy: false,
}

const validationSchema = Yup.object({
  name: Yup.string().required("Please add a name"),
  website: Yup.string().url(
    "Please add a link in the form of http://example.com"
  ),
  instagram: Yup.string().url(
    "Please add a n instagram link in the form of http://instagram.com/yourId"
  ),
  designName: Yup.string().required("Please add a name for your design"),
  description: Yup.string().required(
    "Please add a description for your design"
  ),
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
