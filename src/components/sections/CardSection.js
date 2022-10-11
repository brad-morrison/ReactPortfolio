import React from "react"
import styled from "styled-components"
import Card from "./Card"

export default function Name() {
  return (
    <Wrapper>
      <Text>
        <h1>Projects</h1>
      </Text>
      <ContentWrapper>
        <Card top="Projects" mid="App Development" bottom="SwiftUI & XCode" />
        <Card top="Projects" mid="Web Development" bottom="React and Gatsby" />
        <Card top="Projects" mid="Graphic Design" bottom="Adobe Illustrator" />
        <Card top="Projects" mid="App Development" bottom="SwiftUI & XCode" />
        <Card top="Projects" mid="Web Development" bottom="React and Gatsby" />
        <Card top="Projects" mid="Graphic Design" bottom="Adobe Illustrator" />
        <Card top="Projects" mid="App Development" bottom="SwiftUI & XCode" />
        <Card top="Projects" mid="Web Development" bottom="React and Gatsby" />
        <Card top="Projects" mid="Graphic Design" bottom="Adobe Illustrator" />
        <Card top="Projects" mid="App Development" bottom="SwiftUI & XCode" />
        <Card top="Projects" mid="Web Development" bottom="React and Gatsby" />
        <Card top="Projects" mid="Graphic Design" bottom="Adobe Illustrator" />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 100px auto;
`

const ContentWrapper = styled.div`
  max-width: 1080px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 45px auto;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;

  .Card {
    justify-self: center;
  }

  @media (max-width: 992px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const Text = styled.h1`
  h1 {
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 1.4em;
    text-align: center;
    line-height: 0;
  }
`
