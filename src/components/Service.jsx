import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";
import Card from "./Card";

function Service() {
    const [show, setShow] = React.useState(false);


  const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
  `;
  const Left = styled.div`
    width: 50%;
    position: relative;
  `;
  const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 5rem;
  `;
  const Image = styled.img`
    height: 80%;
    position: absolute;
    bottom: 0;
  `;

  const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
  `;
  const Title = styled.h1``;
  const Description = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  `;
  const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  `;

  const Button = styled.button`
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


  const Video = styled.video`
    height: 300px;
    position: absolute;
    bottom: 0;
        top: 0;
        margin: auto;
    display: ${(props) => !props.show && "none"};
  `;
    console.log(show);
  return (
    <Container>
      <Left show={show}>
        { !show && <Image src="https://cutewallpaper.org/24/mark-zuckerberg-transparent/3019310093.jpg" />}
        <Video
          autoPlay
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          show={show}
        ></Video>
      </Left>
      <Right>
        <Wrapper>
          <Title>Mark Zuckerberg</Title>
          <Description>
            Mark Zuckerberg is an American technology entrepreneur, computer
            programmer, and philanthropist. He is the co-founder and chief
            executive officer of Facebook, the world's largest social network,
            and the chairman of the World Economic Forum.
          </Description>
          <CardContainer>
            <Card />
            <Card />
            <Card />
          </CardContainer>
          <Button onClick={() => setShow(true)}>Get Started</Button>
        </Wrapper>
      </Right>
      <AnimatedShapes/>

    </Container>
  );
}

export default Service;
