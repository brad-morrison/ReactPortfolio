import React from "react"
import styled from "styled-components"

export default function Avatar() {
  return <Wrapper></Wrapper>
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

  background: url("https://avatars.githubusercontent.com/u/45197952?v=4.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
`
