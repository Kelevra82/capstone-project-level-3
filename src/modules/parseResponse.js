import { output } from "../utils/output.js";

export function parseResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message, "emailFormProcessedTag");
}
