import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
 

const Shape = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
`;
const ClipPath = styled.div`
  clip-path: circle(61.5% at 100% 56%);
  ${Shape}

  background-color: #0381e9;
`;

const ClipPath2 = styled.div`
  clip-path: circle(57.9% at 0 52%);
  ${Shape}
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

const ClipPath3 = styled.div`
  /* clip-path: polygon(0 0, 46% 0, 100% 100%, 42% 100%); */
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 60.5% 100%);
  
  ${Shape}
  background: #0381e9;
`;
const ClipPath4 = styled.div`
clip-path: circle(50.1% at 11% 21%);
  
  ${Shape}
  background: #0381e9;
`;



function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <ClipPath />
      </Container>
      <Container>
        <Features />
        <ClipPath2 />
      </Container>
      <Container>
        <Service />
      </Container>
      <Container>
        <Price />
        <ClipPath4/>

      </Container>
      <Container>
        <Contact />
        <ClipPath/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
