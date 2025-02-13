export function getServerResponse(resolve) {
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