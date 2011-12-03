/**
 * A convenious controller that logs all events.
 * @constructor
 * @implements {Controller}
 */
function EventLoggingController(){
}

/**
 * Send all events to log.
 * 
 * @param {MVCEvent} event The event to log.
 */
EventLoggingController.prototype.receiveEvent = function(event){
    console.log(event);
    return true;
};