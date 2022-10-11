import React from "react"
import styled from "styled-components"
import CardFixed from "../sections/CardFixed"

export default function CardStack() {
  return (
    <Wrapper>
      <div className="card1">
        <CardFixed
          top="Projects"
          mid="App Development"
          bottom="SwiftUI & XCode"
        />
      </div>
      <div className="card2">
        <CardFixed
          top="Projects"
          mid="App Development"
          bottom="SwiftUI & XCode"
        />
      </div>
      <div className="card3">
        <CardFixed
          top="Projects"
          mid="App Development"
          bottom="SwiftUI & XCode"
        />
      </div>
      <div className="card4">
        <CardFixed
          top="Projects"
          mid="App Development"
          bottom="SwiftUI & XCode"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 2000px;
  perspective-origin: 234% 259%;
  height: 320px;
  width: 700px;

  @media (max-width: 992px) {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    margin-top: 80px;
    transform: scale(1);
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  div {
    transform: rotateY(-5deg) rotateX(5deg);
    transform-origin: bottom left;
  }

  :hover div {
    transform: translateY(3px);
    transform: rotateY(-3deg) rotateX(3deg);
    transform-origin: bottom left;
    filter: brightness(110%) saturate(120%);

    &.card1 {
      transform: translateY(20px);
      left: 0px;
      top: 0px;
      filter: brightness(160%) saturate(110%);
    }
    &.card2 {
      transform: translateY(-50px);
      left: 100px;
      filter: brightness(130%) saturate(105%);
    }
    &.card3 {
      transform: translateY(50px);
      left: 200px;
      filter: brightness(110%) saturate(100%);
    }
    &.card4 {
      transform: translateY(-20px);
      left: 300px;
      filter: brightness(90%) saturate(90%);
    }
  }

  .card1 {
    position: absolute;
    left: 30px;
    top: 0px;
  }

  .card2 {
    position: absolute;
    left: 60px;
    z-index: -1;
    filter: brightness(95%) saturate(90%);
  }

  .card3 {
    position: absolute;
    left: 90px;
    z-index: -2;
    filter: brightness(90%) saturate(70%);
  }

  .card4 {
    position: absolute;
    left: 120px;
    z-index: -3;
    filter: brightness(80%) saturate(50%);
  }
`
