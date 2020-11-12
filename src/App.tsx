import React, { useState } from "react";
import styled from "styled-components";
import { SylowResult } from "./components/sylowResult/SylowResult";
import { completeSylow, ISylow } from "./utils/sylow";

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
  const [input, setInput] = useState("input");

  const [answer, setAnswer] = useState(null as ISylow | null);

  const handleClick = () => {
    setAnswer(completeSylow(Number(input)));
  };

  return (
    <Container>
      <h1>Sylow Analyzer</h1>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleClick}>Analyze</Button>
      {answer ? <SylowResult analysis={answer} /> : <div>no input yet</div>}
    </Container>
  );
}
