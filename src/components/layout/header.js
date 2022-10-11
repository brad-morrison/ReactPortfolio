import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"

export default function Name() {
  return (
    <MenuWrapper>
      <Left>
        <Logo></Logo>
        <Title>
          Bradley <br />
          Morrison
        </Title>
      </Left>
      <Buttons>
        <MenuButton title={"About"} />
        <MenuButton title={"Blog"} />
        <MenuButton title={"News"} />
        <MenuButton title={"Search"} />
        <MenuButton title={"Contact"} />
      </Buttons>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
`

const Logo = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  -webkit-box-shadow: 0px 0px 40px 20px rgba(255, 65, 109, 0.3);
  -moz-box-shadow: 0px 0px 40px 20px rgba(255, 65, 109, 0.3);
  box-shadow: 0px 0px 40px 20px rgba(255, 65, 109, 0.3);
`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 40px;
`

const Title = styled.h1`
  color: #ff416c;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 1.1em;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: white;
    letter-spacing: 1px;
  }
`

const Left = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
`
