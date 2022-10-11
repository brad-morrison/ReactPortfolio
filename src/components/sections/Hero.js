import React from "react"
import styled from "styled-components"
import CardStack from "../animations/CardStack"

export default function Hero() {
  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <Text>
            <h2>Bradley Morrison</h2>
            <h1>Developer & Designer</h1>
          </Text>
          <CardStack />
        </ContentWrapper>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  margin: 100px auto;
  max-width: 980px;
  padding: 0 30px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 400px auto;
  gap: auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }
`

const Text = styled.h1`
  h2 {
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1.8em;
  }

  h1 {
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    font-size: 3.4em;
  }
`
