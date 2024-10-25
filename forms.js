function myProcessForm(event) {
    event.preventDefault(); //Prevents the page from refreshing after submitting a form.
    const form = event.target;
    const nameInput = form[0];
    const emailInput = form[1];
    const name = nameInput.value;
    const email = emailInput.value;
    output(`Thank you ${name} for your inquiry. We will get back to you at ${email}<br>`);
}