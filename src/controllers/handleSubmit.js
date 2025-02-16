import { getServerResponse } from "../modules/getServerResponse.js";
import { parseResponse } from "../modules/parseResponse.js";
import { output } from "../utils/output.js";

window.handleSubmit = handleSubmit;
export function handleSubmit(event = new Event()) {
  debugger;
  event.preventDefault();
  const inputs = event.target;
  const nameInput = inputs[0];
  const emailInput = inputs[1];
  const name = nameInput.value;
  const email = emailInput.value;
  output(
    `Please wait while we process your request with Name: ${name} and Email: ${email} ...`,
    "emailFormProcessingTag"
  );
  const promise = new Promise(getServerResponse);
  promise.then(parseResponse);
}
