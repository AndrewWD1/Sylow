import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Nav from "./components/Nav";
import { SylowResult } from "./components/SylowResult";
import { completeSylow, ISylow } from "./utils/sylow";

interface AppContainerProps {
  horizontal: boolean;
}

const AppContainer = styled.div<AppContainerProps>`
  font-family: sans-serif;
  display: flex;
  height: 100vh;
  width: 100vw;
  ${(props) =>
    props.horizontal &&
    css`
      flex-direction: column;
    `}
`;

const Container = styled.main`
  margin-top: 1rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  font-size: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.1rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export default function App() {
  const [input, setInput] = useState("input");
  const [answer, setAnswer] = useState(null as ISylow | null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleClick = () => {
    setAnswer(completeSylow(Number(input)));
  };

  return (
    <AppContainer horizontal={width < 900}>
      <Nav horizontal={width < 900} />
      <Container>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={handleClick}>Analyze</Button>
        {answer ? <SylowResult analysis={answer} /> : <div>no input yet</div>}
      </Container>
    </AppContainer>
  );
}
