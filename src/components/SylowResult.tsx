import React from "react";
import styled from "styled-components";
import { ISylow, ISylowFactors } from "../utils/sylow";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 1rem;
  padding-top: 0rem;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem 1rem;

  & .Factors {
    display: inline-block;
  }
`;

const Table = styled.table`
  text-align: left;
  border: 1px solid black;

  th {
    padding: 0.2rem 0.4rem;
    border: 1px solid black;
  }
  td {
    padding: 0.5rem;
    border: 1px solid black;
  }
`;

const removeTrailingComma = (str: string) =>
  str.substring(0, str.lastIndexOf(","));

const stringifySylowResult = (p: ISylowFactors) =>
  removeTrailingComma(
    p.sylowFactors.reduce<string>((a, c) => a + `(${c}), `, "")
  );

export const SylowResult: React.FC<{
  analysis: ISylow;
}> = ({ analysis }) => {
  if (typeof analysis.sylowFactorization === "string")
    return <div>{analysis.sylowFactorization}</div>;

  return (
    <Container>
      <h2>
        Sylow subgroup factors for groups of order:{" "}
        <span className="Factors">
          {analysis.int} ={" "}
          {analysis.factorization.map((fac) => (
            <>
              {fac[0]}
              <sup>{fac[1]}</sup>
            </>
          ))}
        </span>
      </h2>
      <Table>
        <thead>
          <tr>
            <th>p</th>
            <th>(p, t mod p)</th>
          </tr>
        </thead>
        <tbody>
          {analysis.sylowFactorization.map((p) => (
            <tr>
              <td>{p.primeFactor}</td>
              <td>{stringifySylowResult(p)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Analysis: </h2>
      <div>{analysis.analysis}</div>
    </Container>
  );
};
