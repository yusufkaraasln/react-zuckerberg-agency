import React from "react";
import styled from "styled-components";

function PriceCard() {
  const Container = styled.div`
   box-shadow: 6px 6px 41px 13px #bbdeff3b;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    justify-content: center;
    
  `;
  const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const PriceText = styled.div`
    font-size: 1.5rem;
    color: #000;
  `;

  const PriceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    background: #0099ff;
  `;

  const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    list-style: none;
  `;

  const ListItem = styled.li`
    font-size: 1.5rem;
    list-style: none;

    color: gray;
  `;

const Button = styled.button`
background-color: #0381e9;
 padding: 10px 20px;
    font-size: 20px;
    color: #f5f5f5;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
`;

  return (
    <Container>
      <Price>
        <PriceText>
          $<strong style={{ color: "skyblue", fontSize: "3rem" }}>99</strong>
          /year
        </PriceText>
      </Price>
      <PriceInfo>Basic</PriceInfo>
      <List>
        <ListItem>Daily Feedback</ListItem>
        <ListItem>Full Access</ListItem>
        <ListItem>Full Support</ListItem>
        <ListItem>Effective Support</ListItem>
        <ListItem></ListItem>
      </List>
      <Button>Buy Now</Button>
    </Container>
  );
}

export default PriceCard;
