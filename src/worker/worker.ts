import { completeSylow, ISylow } from "../utils/sylow";

export function processData(data: string): ISylow {
  // Process the data without stalling the UI

  return completeSylow(Number(data));
}
