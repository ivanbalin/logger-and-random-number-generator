function createLogger(){
    const messages = [];

    // Возвращаемый объект с методами log и getLogs
    return {
        log: function(message) {
            messages.push(message);
        },
        getLogs: function() {
            return messages;
        }
    };
}

const logger = createLogger()

logger.log("белеберда 1")
logger.log("белеберда 2")
logger.log("белеберда 3")

console.log(logger.getLogs());
