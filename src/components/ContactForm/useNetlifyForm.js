import React from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const initialState = {
  pending: false,
  error: null,
  success: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return {
        ...state,
        pending: action.payload,
      }
    case "error":
      return {
        ...state,
        error: action.payload,
      }
    case "success":
      return {
        ...state,
        success: action.payload,
      }
    default:
      throw new Error()
  }
}

const useNetlifyForm = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const onSubmit = async values => {
    console.log("submoittt", values)
    dispatch({ type: "pending", payload: true })

    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...values,
        }),
      }

      await fetch("/", options)
      dispatch({ type: "success", payload: true })
      console.log("succsss")
    } catch (error) {
      console.log("error", error)
      dispatch({
        type: "error",
        payload: "Oops! An error happened, please try again later!",
      })
    }

    dispatch({ type: "pending", payload: false })
  }

  return [state, onSubmit]
}

export default useNetlifyForm
