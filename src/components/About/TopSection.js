import React from "react"
import styled from "styled-components"
import { Section, SectionLeft, SectionRight } from "./About.styled"

const MainText = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;

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
        A world hiding in plain site. A world in our own homes that we’ve been 
        too busy to notice. On Planet Joy, exciting creatures, unique buildings,
        and strange objects sprout up all the time! These are what make Joy so 
        special. With a little nudge, maybe you can see Planet Joy too. Each week,
        new Creations will be released here and on{" "}
        <a
          href="https://www.instagram.com/the_planetjoy/"
          target="blank"
          rel="noopener noreferrer"
        >
          Instagram.
        </a>{" "} 
        Check out the instructions and you can build them yourself! Use any material
        you have—even waste is great! Just don’t forget to share a snap when you’re done.
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
