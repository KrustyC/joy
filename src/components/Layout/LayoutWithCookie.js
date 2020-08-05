import React from "react"
import styled from "styled-components"
import useCookie from "../../hooks/useCookie"
import CookieBanner from "../CookieBanner"

const LayoutContainer = styled.div`
  min-height: 67vh;
`

const COOKIE_BANNER = "gatsby-gdpr-google-analytics"

const LayoutWithCookie = ({ children }) => {
  const [showCookieBanner, onAllowCookie, onForbidCookie] = useCookie(
    COOKIE_BANNER
  )

  return (
    <>
      <LayoutContainer>{children}</LayoutContainer>

      {showCookieBanner && (
        <CookieBanner
          onAllowCookie={onAllowCookie}
          onForbidCookie={onForbidCookie}
        />
      )}
    </>
  )
}

export default LayoutWithCookie
