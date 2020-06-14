import React from "react"
import styled from "styled-components"
import { Section, SectionLeft, SectionRight } from "./About.styled"

const MainText = styled.p`
  font-size: 32px;
  font-weight: 600;

  a {
    color: black;

    &:visited,
    :hover {
      color: black;
    }
  }
`

const TopRightList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const TopRightListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
    margin: 0;
    margin-bottom: 5px;
  }

  p {
    font-size: 20px;
  }
`
export const TopSection = () => (
  <Section>
    <SectionLeft>
      <MainText>
        Planet Joy, the world that has always been there, in our homes, right in
        front of us. We were just too busy to see it. Every week, new exciting
        creatures, unique buildings and objects that make Joy so special, will
        be released on <a href="https://instagram.com">Instagram</a> and here.
        You can check out the instructions and build them yourself. Use any
        material you have, even waste is great! Just don’t forget to share a
        snap of your creation!
      </MainText>
    </SectionLeft>

    <SectionRight>
      <TopRightList>
        <TopRightListItem>
          <h3>Who</h3>
          <p>
            Planet Joy is an open community of creatives. The goal is to produce
            new exclusive material every week to help you spend your time
            creatively during life at home.
          </p>
        </TopRightListItem>

        <TopRightListItem>
          <h3>Spread the Joy</h3>
          <p>
            We hope Joy reaches as many people as possible. So why don’t you
            print an extra set of instructions and bring it to a neighbour that
            doesn’t use Instagram?
          </p>
        </TopRightListItem>

        <TopRightListItem>
          <h3>Join the Joy</h3>
          <p>
            If you’d like to join the community and populate Planet Joy, you can
            upload pictures of how to make your design and even a blueprint of
            it. We will post them on Instagram and create the printable version
            to share with neighbours. Scroll down on this page to see some
            examples!
          </p>
        </TopRightListItem>
      </TopRightList>
    </SectionRight>
  </Section>
)
