import React from "react";
import styled from "styled-components";
import Instagram from "../assets/instagram.jpeg";
import AnimatedShapes from "./AnimatedShapes";

export const Button = styled.button`
background-color: #0381e9;
border: none;
border-radius: 5px;
padding: 10px 20px;
font-size: 20px;
color: #f5f5f5;
cursor: pointer;
width: 30%;
margin-top: 2rem;
`;


function Features() {
  const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
  `;
  const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  `;
  const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;


  `;

  const Image = styled.img`
    width: 50%;
    
    border-radius: 12rem 20rem 19rem 12rem;
  `;

  const Title = styled.span`
    font-size: 70px;
    width: 80%;
  `;
  const Subtitle = styled.span`
    font-size: 30px;

    `;

  const Desc = styled.span`
  font-size: 20px;
  font-weight: 300;
  `;

 


  return (
    <Container>
      <Left>
        <Image src={Instagram} />
      </Left>
      <Right>
        <Title>Connect to World That <strong>Zuck</strong> Production</Title>
        <Subtitle><strong>Instagram</strong>, that's all we need</Subtitle>
        <Desc>With this production can be discover the world</Desc>
        <Button>Google Play</Button>
        <Button>App Store</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
}

export default Features;
