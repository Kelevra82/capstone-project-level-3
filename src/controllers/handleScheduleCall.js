import { output } from "../utils/output.js";

window.handleScheduleCall = handleScheduleCall;

function handleScheduleCall(event) {
  event.preventDefault();
  const form = event.target;
  const nameInput = form[0];
  const phoneInput = form[1];
  const dateInput = form[2];
  const timeInput = form[3];
  const name = nameInput.value;
  const phone = phoneInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const datetime = `${date} at ${time}`;
  output(
    `Thank you ${name} for scheduling a reservation! Phone call scheduled for ${datetime} at ${phone}.<br />`,
    "scheduleFormTag"
  );
}
