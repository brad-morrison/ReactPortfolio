import React from "react"
import styled from "styled-components"

export default function MenuButton(props) {
  return (
    <div>
      <MenuItem>{props.title}</MenuItem>
    </div>
  )
}

const MenuItem = styled.button`
  all: unset;
  color: #ff416c;
  padding: 10px 14px;
  border-radius: 50px;
  border: rgba(255, 65, 108, 0.8) solid 1px;
  background-color: rgba(255, 65, 108, 0);

  font-family: "Raleway", sans-serif;
  font-weight: 200;
  font-size: 0.9em;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  -webkit-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.1);
  -moz-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.1);
  box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.1);

  :hover {
    cursor: pointer;
    color: white;
    border: rgba(255, 65, 108, 1) solid 1px;
    background-color: rgba(255, 65, 108, 1);

    -webkit-box-shadow: 0px 0px 40px 20px rgba(255, 65, 109, 0.3);
    -moz-box-shadow: 0px 0px 40px 20px rgba(255, 65, 109, 0.3);
    box-shadow: 0px 0px 40px 20px rgba(255, 65, 109, 0.3);
  }
`
