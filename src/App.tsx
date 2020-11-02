import React, { useState } from "react";
import styled from "styled-components";
import { sylow } from "./utils/sylow";

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
  const [answer, setAnswer] = useState(null as null | number | string);

  const handleClick = () => {
    setAnswer(sylow(Number(state)));
  };

  return (
    <Container>
      <h1>Sylow Analyzer</h1>
      <Input value={state} onChange={(e) => updateState(e.target.value)} />
      <Button onClick={handleClick}>Analyze</Button>
      {answer || <div>{answer}</div>}
    </Container>
  );
}
