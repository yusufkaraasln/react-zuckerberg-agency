import React from "react";
import styled from "styled-components";

function Card() {
  const Container = styled.div`
    width: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 6px 6px 41px 13px #bbdeff57;
    border-radius: 10px;
  `;
 

  const Text = styled.span`
    text-align: center;
    margin-top: 10px;
  `;

  return (
    <Container>
      <i class="fa-brands fa-instagram"></i>
      <Text>Lorem ipsum dolor sit amet</Text>
      
    </Container>
  );
}

export default Card;
