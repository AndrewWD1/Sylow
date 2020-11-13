import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import { SylowResult } from "./components/SylowResult";
import { completeSylow, ISylow } from "./utils/sylow";

const AppContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.main`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input``;

const Button = styled.button`
  margin: 1rem;
  padding: 0.3rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export default function App() {
  const [input, setInput] = useState("input");

  const [answer, setAnswer] = useState(null as ISylow | null);

  const handleClick = () => {
    setAnswer(completeSylow(Number(input)));
  };

  return (
    <AppContainer>
      <Nav />
      <Container>
        <h1>Sylow Analyzer</h1>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={handleClick}>Analyze</Button>
        {answer ? <SylowResult analysis={answer} /> : <div>no input yet</div>}
      </Container>
    </AppContainer>
  );
}
