import React, { useState } from "react";
import styled from "styled-components";
import { SylowResult } from "./components/SylowResult";
import { ISylowResult, sylow } from "./utils/sylow";

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input``;

const Button = styled.button`
  margin: 1rem;
`;

export default function App() {
  const [state, updateState] = useState("input");

  const [answer, setAnswer] = useState(
    "No input yet" as ISylowResult[] | string
  );

  const handleClick = () => {
    setAnswer(sylow(state));
  };

  return (
    <Container>
      <h1>Sylow Analyzer</h1>
      <Input value={state} onChange={(e) => updateState(e.target.value)} />
      <Button onClick={handleClick}>Analyze</Button>
      <SylowResult result={answer}/>
    </Container>
  );
}
