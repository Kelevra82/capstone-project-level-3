import { formProcessed1 } from "../utils/formProcessed1.js";

export function parseResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    formProcessed1(message);
}