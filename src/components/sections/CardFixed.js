import React from "react"
import styled from "styled-components"

export default function CardFixed(props) {
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
  width: 500px;
  max-width: 500px;
  margin: 0;
  border-radius: 20px;
  padding: 10px 20px;

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

  -webkit-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.1);
  -moz-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.1);
  box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.2);

  border: solid #ff416c 1px;

  :hover {
    //cursor: pointer;
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
