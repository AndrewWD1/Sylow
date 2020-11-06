import React from "react";
import styled from "styled-components";
import { factor } from "../../utils/factor";
import { ISylowFactors, sylowFactors } from "../../utils/sylow";
import { sylowAnalysis } from "../../utils/sylowAnalysis";

interface IProps {
  value: string;
}

const stringifySylowResult = (p: ISylowFactors) => {
  let str = "";

  p.sylowFactors.forEach((e) => {
    str += `(${e}), `;
  });

  return str.slice(0, str.length - 2);
};

const Table = styled.table`
  text-align: left;

  border: 1px solid black;
  th {
    border: 1px solid black;
  }
  td {
    padding: 1rem;
    border: 1px solid black;
  }
`;

export const SylowResult: React.FC<IProps> = ({ value }) => {
  const result = sylowFactors(value);

  if (typeof result === "string") return <div>{result}</div>;

  return (
    <div>
      <h2>
        Sylow subgroup factors for groups of order: {value} =
        {factor(Number(value)).map((fac) => (
          <>
            {" "}
            {fac[0]}
            <sup>{fac[1]}</sup>{" "}
          </>
        ))}
      </h2>
      <Table>
        <tr>
          <th>p</th>
          <th>(p, q mod p)</th>
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
    </div>
  );
};
