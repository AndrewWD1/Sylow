import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  width: 15rem;
  border-right: 1px solid black;
`;

const Title = styled.h1`
  padding: 0.5rem 1rem;
`;

const Nav = () => {
  return (
    <NavContainer>
      <Title>Sylow Analyzer</Title>
      <div>link1</div>
    </NavContainer>
  );
};

export default Nav;
