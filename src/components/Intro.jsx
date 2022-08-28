import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

function Intro() {
  const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 35px;
  `;

  const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Right = styled.div`
    width: 40%;
    position: relative;
  `;
  const Title = styled.h1`
    font-size: 3rem;
    width: 60%;
  `;

  const Description = styled.p`
    font-size: 1.5rem;
    width: 60%;
    margin-top: 20px;
  `;

  const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    align-items: center;
  `;
  const Button = styled.button`
    background-color: #0381e9;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    color: #f5f5f5;
    cursor: pointer;
    letter-spacing: 1.4px;
  `;
  const Contact = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const ContactText = styled.span`
    color: grey;
    margin-top: 10px;
  `;

  const Phone = styled.span`
    color: #c4c4c4;
    font-weight: bold;
  `;

  const Zuck = styled.img`
    width: 108%;
    position: absolute;
    bottom: -2.2rem;
    `

  return (
    <Container>
      <Left>
        <Title>The Mark Zuckerberg Production</Title>
        <Description>
          The Mark Zuckerberg Production is a production company that is
          spearheaded by Mark Zuckerberg. The company is a global company that
          produces and distributes products and services to the world.
        </Description>
        <Info>
          <Button>Discover</Button>
          <Contact>
            <Phone>+90 539 (201) 44 54</Phone>
            <ContactText> And I am human. I was human </ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Zuck src="https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Mark-Zuckerberg-PNG-Transparent-Image-500x434.png" />
      </Right>
      <AnimatedShapes/>
    </Container>
  );
}

export default Intro;
