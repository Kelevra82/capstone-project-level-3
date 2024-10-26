function myProcessForm(event) {
    debugger;
    event.preventDefault(); //Prevents the page from refreshing after submitting a form.
    const form = event.target;
    const nameInput = form[0];
    const emailInput = form[1];
    const name = nameInput.value;
    const email = emailInput.value;
    output1(`Thank you ${name} for your inquiry. We will get back to you at ${email}<br>`);
}

function scheduleCall(event) {
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
    output2(`Thank you ${name} for scheduling a reservation! Phone call scheduled for ${datetime} at ${phone}.<br>`);
}