import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import Logo from "./Logo"
import { HeaderWrapper, InnerHeader } from "../Header.styled"

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/the_planetjoy/",
  },
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
  },
]

const Div = styled.div`
  
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.contactUsPage};
  height: 100vh;
  width: 100vw;
  z-index: 100000;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 10px;
`

const StyledA = styled.a`
  font-weight: bold;
  color: black;
  text-decoration: none;
`

const Ul = styled.ul`
  list-style: none;

  margin-left: 0;
  margin-bottom: 10px;
  padding-left: 0;
  font-size: 30px;
  text-align: left;
  width: 88vw;
`

const Li = styled.li`
  color: white;

  font-size: 26px;
  a {
    text-decoration: none;
    color: #000000 !important;
    font-weight: bold;
  }
`

const NavIcon = styled.div`
  margin: 1em;
  width: 30px;

  &:after,
  &:before,
  div {
    background-color: #000;
    border-radius: 3px;
    content: "";
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  ${({ active }) =>
    active &&
    css`
      margin-top: 15px;

      &:before {
        transform: translateY(12px) rotate(135deg);
      }

      &:after {
        transform: translateY(-12px) rotate(-135deg);
      }

      div {
        transform: scale(0);
      }
    `}
`

const Copy = styled.div`
  color: #000000;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 20px;
  text-align: left;
  width: 88vw;

  a {
    color: black;
    text-decoration: none;
  }
`

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(!isOpen)

  return (
    <Div>
      <NavIcon onClick={onToggle}>
        <div />
      </NavIcon>

      {isOpen && (
        <Overlay>
          <HeaderWrapper>
            <InnerHeader>
              <Logo />

              <NavIcon active onClick={onToggle}>
                <div />
              </NavIcon>
            </InnerHeader>
          </HeaderWrapper>

          <Ul>
            {links.map(({ label, to, href }) => (
              <Li key={label}>
                {!!to ? (
                  <Link activeClassName="active" to={to}>
                    {label}
                  </Link>
                ) : (
                  <StyledA href={href}>{label}</StyledA>
                )}
              </Li>
            ))}
          </Ul>

          <Copy>
            <span>2020 The Planet Joy</span>
            <span>
              <a href="mailto:spreadonejoy@gmail.com">spreadonejoy@gmail.com</a>
            </span>
            <span>
              Built by{" "}
              <a
                href="https://dcrestini.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Davide Crestini
              </a>
            </span>
          </Copy>
        </Overlay>
      )}
    </Div>
  )
}
