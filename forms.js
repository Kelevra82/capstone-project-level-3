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

function getServerResponse(resolve) {
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        debugger;
        //SIMULATE A SERVER RESPONSE BY SENDING A STRINGIFIED OBJECT
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }

}

function parseResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    formProcessed1(message);
}

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
    output(`Thank you ${name} for scheduling a reservation! Phone call scheduled for ${datetime} at ${phone}.<br>`);
}