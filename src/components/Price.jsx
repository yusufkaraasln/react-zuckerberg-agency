import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'
import PriceCard from './PriceCard'

function Price() {

    const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    height: 100vh;
    width: 100vw;

    `

  return (
    <Container>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>

        <AnimatedShapes/>

    </Container>
  )
}

 


export default Price