import React from "react";
import styled from "styled-components";

function Footer() {
  const Container = styled.div`
  padding: 0 1rem;
    display: flex;
    background-color: #242526;
    align-items: center;
    justify-content: space-between;
  `;
  const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `;
  const Right = styled.div`
   color: #f5f5f5;
    font-size: 20px;
    font-weight: 300;`;
  const LeftItem = styled.span`
  color: #f5f5f5;
  height: 100%;
  padding: 20px;
    font-size: 20px;
    font-weight: 300;
    transition: all 0.3s ease-in-out;
    :hover {
        background-color: #0381e9;
        cursor: pointer;
    }
  `;

  return (
    <Container>
      <Left>
        <LeftItem>Contact</LeftItem>
        <LeftItem>References</LeftItem>
        <LeftItem>Products</LeftItem>
        <LeftItem>API</LeftItem>
      </Left>
        <Right>© Mark Zuckerberg</Right>
    </Container>
  );
}

export default Footer;
