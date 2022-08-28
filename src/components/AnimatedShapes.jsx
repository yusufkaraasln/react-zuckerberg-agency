import React from 'react'
import styled from 'styled-components'

function AnimatedShapes() {


 const Circle2 = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    z-index: -1;opacity: 0.4;

    background-color: #0381e9;
    position: absolute;
    top: -100px;
    left: -100px;
    animation: circle2 30s linear alternate infinite;
    
    @keyframes circle2 {
        to{
            transform: translate(100vw, 100vh);
        }
    }

    
 `
 const Circle3 = styled.div`
    height: 62px;
    width: 62px;
    border-radius: 50%;
    z-index: -1;
    background-color: #0381e9;
    position: absolute;
    top: 400px;opacity: 0.7;

    left: -50px;
    animation: circle3 25s linear alternate infinite;
    
    @keyframes circle3 {
        to{
            transform: translate(100vw, 0);
        }
    }

    
 `
 const Circle1 = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    z-index: -1;opacity: 0.1;

    background-color: #0381e9;
    position: absolute;
    top: -100px;
    left: -100px;
    animation: circle1 25s linear alternate infinite;
    
    @keyframes circle1 {
        to{
            transform: translate(100vw, 100vh);
        }
    }

    
 `

const Circle5 = styled.div`
height: 120px;
width: 120px;
border-radius: 50%;
z-index: -1;
background-color: #0381e9;
position: absolute;
top: 660px;opacity: 0.3;

right: 300px;
animation: circle5 25s linear alternate infinite;

@keyframes circle5 {
    to{
        transform: translate(-100vw, -40vh);
    }
}


`
const Circle6 = styled.div`
height: 150px;
width: 150px;
border-radius: 50%;
z-index: -1;
background-color: #0381e9;
position: absolute;
opacity: 0.5;
top: 0px;
right: 300px;
animation: circle6 25s linear alternate infinite;

@keyframes circle6 {
    to{
        transform: translate(-100vw, 90vh);
    }
}


`
const Circle4 = styled.div`
height: 60px;
width: 60px;
border-radius: 50%;
z-index: -1;
background-color: #0381e9;
position: absolute;
top: 200px;
opacity: 0.8;

right: 300px;
animation: circle3 25s linear alternate infinite;

@keyframes circle3 {
    to{
        transform: translate(-100vw, 10vh);
    }
}


`

  return (
    <>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Circle3></Circle3>
        <Circle4></Circle4>
        <Circle5></Circle5>
        <Circle6></Circle6>
    </>
  )
}

export default AnimatedShapes