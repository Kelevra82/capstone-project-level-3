import { getServerResponse } from "../modules/getServerResponse.js";
import { parseResponse } from "../modules/parseResponse.js";
import { formProcessing1 } from "../utils/formProcessing1.js";

window.handleSubmit = handleSubmit;
function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const nameInput = inputs[0];
    const emailInput = inputs[1];
    const name = nameInput.value;
    const email = emailInput.value;
    formProcessing1("Please wait while we process your request with Name: " + name + " and Email: " + email + "...");
    const promise = new Promise(getServerResponse);
    promise.then(parseResponse);
}