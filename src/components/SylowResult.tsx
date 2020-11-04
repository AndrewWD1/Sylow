import React from "react";
import { ISylowResult } from "../utils/sylow";

interface IProps {
  result: ISylowResult[] | string;
}

const stringify = (p: ISylowResult) => {
  let str = `${p.primeFactor}  ->  `;

  p.sylowAnalysis.forEach((e) => {
    str += `{${e}}, `;
  });

  return str.slice(0, str.length - 2);
};

export const SylowResult: React.FC<IProps> = ({ result }) => {
  if (typeof result === "string") return <div>{result}</div>;

  return (
    <div>
      {result.map((p) => (
        <div>{stringify(p)}</div>
      ))}
    </div>
  );
};
