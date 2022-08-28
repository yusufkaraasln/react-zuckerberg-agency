import React from "react";
import styled from "styled-components";

function Navbar() {
  const Container = styled.div`
    height: 50px;
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
  `;

  const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline #0381e9;
  `;

  const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
  `;
  const MenuItem = styled.li`
    font-size: 20px;
    font-weight: bold;
    margin-right: 30px;
    color: grey;
  `;

  

  const Button = styled.button`
    background-color: #0381e9;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    color: #f5f5f5;
    cursor: pointer;
    
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <h1>zuck</h1>
          </Logo>

          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Faq</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>

        <Button>Apply</Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
