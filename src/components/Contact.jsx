import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

function Contact() {
  const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
  `;

  const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    margin-left: 10rem;
  `;

  const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    justify-content: center;
  `;

  const ContactText = styled.div`
    font-size: 30px;
    font-weight: 300;
    width: 60%;
  `;

  const Contact = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  `;

  const ContactInput = styled.input`
    padding: 10px;
    font-size: 20px;
  `;

  const ContactForm = styled.textarea`
    height: 116px;
    resize: none;
    padding: 10px;
    font-size: 20px;
  `;

  const Button = styled.button`
    background-color: #0381e9;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    width: 100%;
    font-size: 20px;
    color: #f5f5f5;
    cursor: pointer;
  `;

  const LeftForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  `;
  const RightForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;

  const RightText = styled.div`
    font-size: 1.7rem;
    font-weight: 300;
    color: #fff;
  `;

  return (
    <Container>
      <Left>
        <ContactText>Contact Us dear Developer & User</ContactText>
        <Contact>
          <LeftForm>
            <ContactInput placeholder="Name" />
            <ContactInput placeholder="E-Mail" />
            <ContactInput placeholder="Subject" />
          </LeftForm>

          <RightForm>
            <ContactForm placeholder="Message..." />
            <Button>Send</Button>
          </RightForm>
        </Contact>
      </Left>
      <Right>
        <RightText>Mounthain View, California, USA</RightText>
        <RightText>+90 539 (201) 44 54</RightText>
        <RightText>zuck@facebook.com info@facebook.com</RightText>
      </Right>
      <AnimatedShapes/>

    </Container>
  );
}

export default Contact;
