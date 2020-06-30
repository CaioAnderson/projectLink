const { getMessages } = require('./messages');

const getValidatorError = (error, messagePath) => {
    if(!error) return null;

    const errorMessages = {};

    error.details.map(detail => {
        const message = detail.message;
        const type = detail.type;
        const key = detail.context.key; 

        const path = `${messagePath}.${key}.${type}`;

        const customMessage = getMessages(path);
        if(!customMessage){
            console.log("custon message not found", path);
        }
        errorMessages[key] = customMessage || message;
    });

    return errorMessages;
    
}

module.exports = { getValidatorError, getMessages };