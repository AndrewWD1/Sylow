import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import Nav from "./components/Nav";
import { SylowResult } from "./components/SylowResult";
import { ISylow } from "./utils/sylow";
import Worker from "./worker";

interface AppContainerProps {
  horizontal: boolean;
  waiting: boolean;
}

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      font-family: "Martel Sans", sans-serif;
    }
`;

const AppContainer = styled.div<AppContainerProps>`
  font-family: sans-serif;
  display: flex;
  min-height: 100vh;
  width: 100vw;

  ${(props) =>
    props.waiting &&
    css`
      cursor: progress;
    `}

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

const instance = new Worker();

export default function App() {
  const [input, setInput] = useState("input");
  const [answer, setAnswer] = useState("no input yet" as ISylow | string);
  const [width, setWidth] = useState(window.innerWidth);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleClick = () => {
    return new Promise(async (resolve) => {
      // Use a web worker to process the data
      setAnswer("Calculating...");
      setWaiting(true);
      const processed = await instance.processData(input);
      setWaiting(false);

      setAnswer((processed as unknown) as ISylow);
    });
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer waiting={waiting} horizontal={width < 900}>
        <Nav horizontal={width < 900} />
        <Container>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button onClick={handleClick}>Analyze</Button>
          {typeof answer === "string" ? (
            <div>{answer}</div>
          ) : (
            <SylowResult analysis={answer} />
          )}
        </Container>
      </AppContainer>
    </>
  );
}
