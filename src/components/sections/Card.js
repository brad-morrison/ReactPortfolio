import React from "react"
import styled from "styled-components"

export default function Card(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <p>{props.top}</p>
        <p>{props.mid}</p>
        <h2>{props.bottom}</h2>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 300px;
  border-radius: 20px;
  padding: 10px 20px;
  overflow: hidden;

  display: grid;
  justify-content: start;
  align-items: center;

  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.3);
  -moz-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.3);
  box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.3);

  border: solid #ff416c 1px;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-6px);
    cursor: pointer;
    filter: brightness(180%) saturate(110%);
  }
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;

  p {
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1.3em;
  }

  h2 {
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    font-size: 1.8em;
  }
`
