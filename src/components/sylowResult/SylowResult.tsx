import React from "react";
import { ISylowFactors, sylowFactors } from "../../utils/sylow";
import { sylowAnalysis } from "../../utils/sylowAnalysis";

interface IProps {
  value: string;
}

const stringifySylowResult = (p: ISylowFactors) => {
  let str = `${p.primeFactor}  ->  `;

  p.sylowFactors.forEach((e) => {
    str += `{${e}}, `;
  });

  return str.slice(0, str.length - 2);
};

export const SylowResult: React.FC<IProps> = ({ value }) => {
  const result = sylowFactors(value);

  if (typeof result === "string") return <div>{result}</div>;

  return (
    <div>
      {result.map((p) => (
        <div>{stringifySylowResult(p)}</div>
      ))}
      <div>{sylowAnalysis(result)}</div>
    </div>
  );
};
