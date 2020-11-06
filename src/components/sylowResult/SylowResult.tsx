import React from "react";
import styled from "styled-components";
import { factor } from "../../utils/factor";
import { ISylowFactors, sylowFactors } from "../../utils/sylow";
import { sylowAnalysis } from "../../utils/sylowAnalysis";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 1rem;
  padding-top: 0rem;
  display: flex;
  flex-direction: column;
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
  value: string;
}> = ({ value }) => {
  const result = sylowFactors(value);

  if (typeof result === "string") return <div>{result}</div>;

  return (
    <Container>
      <h2>
        Sylow subgroup factors for groups of order: {value} =
        {factor(Number(value)).map((fac) => (
          <>
            {fac[0]}
            <sup>{fac[1]}</sup>
          </>
        ))}
      </h2>
      <Table>
        <tr>
          <th>p</th>
          <th>(p, t mod p)</th>
        </tr>
        {result.map((p) => (
          <tr>
            <td>{p.primeFactor}</td>
            <td>{stringifySylowResult(p)}</td>
          </tr>
        ))}
      </Table>
      <h2>Analysis: </h2>
      <div>{sylowAnalysis(result)}</div>
    </Container>
  );
};
