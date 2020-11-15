import React, { useState } from "react";
import styled, { css } from "styled-components";

interface NavContainerProps {
  horizontal: boolean;
  dropped: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  display: flex;

  ${(props) =>
    props.horizontal
      ? css`
          flex-direction: column;
          align-items: flex-start;
          border-bottom: 1px solid black;
          padding-left: 0.4rem;

          & .With-Button {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        `
      : css`
          border-right: 1px solid black;
          width: 16rem;
          flex-direction: column;
        `}

  & .Title {
    text-align: center;

    ${(props) =>
      !props.horizontal &&
      css`
        align-self: center;
      `}
  }

  & .Links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${(props) =>
      props.dropped || !props.horizontal
        ? css``
        : css`
            display: none;
          `}

    a {
      margin: 0.5rem;
      text-decoration: unset;
      font-size: large;
    }
  }
`;

const Button = styled.div`
  width: 40px;
  margin: 0.6rem;

  &:hover {
    cursor: pointer;
  }

  .line {
    height: 0.5rem;
    border-top: 2px solid;
  }
`;

const Nav: React.FC<{ horizontal: boolean }> = ({ horizontal }) => {
  const [dropped, toggleDropped] = useState(false);

  return (
    <NavContainer horizontal={horizontal} dropped={dropped}>
      <div className="With-Button">
        <h1 className="Title">Sylow Analyzer</h1>
        {horizontal && (
          <Button onClick={() => toggleDropped(!dropped)}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </Button>
        )}
      </div>
      <div className="Links">
        <a href="https://en.wikipedia.org/wiki/Sylow_theorems">
          Wikipedia article on Sylow's Theorems
        </a>
        <a href="https://andrewdoumont.netlify.app/2020_11_13_Sylow's_Theorems/">
          Blog article on Sylow's Theorem's
        </a>
      </div>
    </NavContainer>
  );
};

export default Nav;
