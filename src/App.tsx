import React, { useState } from "react";
import styled from "styled-components";
import { SylowResult } from "./components/sylowResult/SylowResult";

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const [state, updateState] = useState("input");

  const [answer, setAnswer] = useState("No input yet");

  const handleClick = () => {
    setAnswer(state);
  };

  return (
    <Container>
      <h1>Sylow Analyzer</h1>
      <Input value={state} onChange={(e) => updateState(e.target.value)} />
      <Button onClick={handleClick}>Analyze</Button>
      <SylowResult value={answer} />
    </Container>
  );
}
